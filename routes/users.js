var express = require('express');
var Cloudant = require('@cloudant/cloudant');

var router = express.Router();

getCloudant();

/* GET users listing. */

async function getCloudant() {
    try {
        var cloudant = new Cloudant({
            url: "https://5e4a9d5a-9327-440e-aedc-e3cbf0c404d9-bluemix.cloudantnosqldb.appdomain.cloud",
            plugins: { iamauth: { iamApiKey: "FqcDABL7wVy4LdRzCE7nkhxKvEV2hGd3r5BMX8v9aS3n" } }
        });
        console.log("Connection established");
        let alldbs = await cloudant.db.list();
        console.log(alldbs);
        const db = cloudant.use('mydb');
        db.list({ include_docs: true }, function (err, data) {
            console.log(err, data);
            router.get('/', function (req, res, next) {
                res.send(data);
            });
        });

        router.post('/user', function (req, res, next) {
            var copy = Object.assign({}, req.body);
            calculateCFData(copy);
            var document = req.body;
            var id = (document._id).split(":");
            delete document._id;
            delete document.name;
            var dataTobeAdded = document;
            console.log("here" + id[1]);
            db.find({ selector: { _id: "csamazon:" + id[1] } }, function (err, data) {
                if (data && data.docs && data.docs.length > 0) {
                    var newObject = {};
                    newObject["_id"] = data.docs[0]["_id"];
                    newObject["_rev"] = data.docs[0]["_rev"];
                    newObject[id[1]] = data.docs[0][id[1]];
                    let tempArray = data.docs;
                    calculateCFData(dataTobeAdded);
                    newObject[id[1]].push(dataTobeAdded);
                    console.log(newObject);
                    if (data.docs[0]["_id"]) {
                        db.insert(newObject, function (err, data1) {
                            if (!err) {
                                console.log('success', 'The record was updated successfully');
                                res.status(200).send(data1);
                            }
                            else {
                                console.log('failure', err);
                                res.status(400).send("Unable to insert the data");
                            }
                        });
                    } else {
                        res.status(400).send("Unable to insert the data");
                    }
                }else{
                    console.log("Unable to find the data1");
                    console.log(copy);
                    var tempObj = {};
                    tempObj["_id"] = copy._id;
                    tempObj["name"] = copy.name;
                    delete copy._id;
                    delete copy.name;
                    tempObj[id[1]] = [];
                    tempObj[id[1]].push(copy);
                    console.log("Tem");
                    console.log(tempObj);
                    let data = db.insert(tempObj);
                    if (data) {
                        res.status(200).send({ data: data });
                    } 
                }
                if (err) {
                    res.status(400).send("Error during saving the new data");
                    
                }
            });
        });

        function calculateCFData(data) {
            data["housing"]["CF"] = (
                (data["housing"]["electricity"] * 0.85) +
                (data["housing"]["fuelOil"] * 2.475) +
                (data["housing"]["lPG"] * 2.983) +
                (data["housing"]["waste"] * 0.991) +
                (data["housing"]["water"] * 0.00128)
            );
            data["travel"]["CF"] = (
                (data["travel"]["vehicle"] * (2.475 / 16)) +
                (data["travel"]["bus"] * (2.653 / 17)) +
                (data["travel"]["taxi"] * (2.475 / 16)) +
                (data["travel"]["rail"] * 0.007837) +
                (data["travel"]["flying"] * 0.115)
            );
            data["food"]["CF"] = (
                (data["food"]["whiteMeat"] * 0.00217) +
                (data["food"]["dairy"] * 0.00298) +
                (data["food"]["vegetables"] * 0.00259) +
                (data["food"]["fruit"] * 0.000874) +
                (data["food"]["grains"] * 0.000235)
            );
            data["CF"] = (
                data["housing"]["CF"] +
                data["travel"]["CF"] +
                data["food"]["CF"]
            );
            return data;
        }


        router.get('/:id', function (req, res, next) {
            console.log(req.params.id);
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                if (!err) {
                    console.log(data);
                    res.status(200).send(data);
                } else {
                    res.status(400).send("Unable to find the data");
                }

            });
        });

        function constructMainChartData(data) {
            var mainChartArray = [{ name: "housing", data: [] },
            { name: "travel", data: [] },
            { name: "food", data: [] }];
            data.forEach((cfData => {
                mainChartArray[0]["data"].push(cfData["housing"]["CF"]);
                mainChartArray[1]["data"].push(cfData["travel"]["CF"]);
                mainChartArray[2]["data"].push(cfData["food"]["CF"]);
            }));
            return mainChartArray;
        }

        router.get('/:id/:mainchart', function (req, res, next) {
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                if (!err) {
                    console.log(data["docs"][0][req.params.id]);
                    res.status(200).send(constructMainChartData(data["docs"][0][req.params.id]));
                } else {
                    res.status(400).send("Unable to find the data");
                }

            });
        });

        router.get('/piechart/:id/:key', function (req, res, next) {
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                if (!err) {
                    var usrArray = data["docs"][0][req.params.id];
                    var piechartArray = [
                        {
                            "name": "electricity",
                            "y": []

                        }];
                    var electricityData = 0;
                    var fuelOilData = 0;
                    var lpgData = 0;
                    var wasteData = 0;
                    var waterData = 0;
                    var vehicleData = 0;
                    var busData = 0;
                    var taxiData = 0;
                    var railData = 0;
                    var flyingData = 0;
                    var whiteMeatData = 0;
                    var dairyData = 0;
                    var vegetablesData = 0;
                    var fruitData = 0;
                    var grainsData = 0;
                    usrArray.forEach(data => {
                        if (req.params.key == "housing") {
                            electricityData += data["housing"]["electricity"] * 0.85;
                            fuelOilData += data["housing"]["fuelOil"] * 2.475;
                            lpgData += data["housing"]["lPG"] * 2.983;
                            wasteData += data["housing"]["waste"] * 0.991;
                            waterData += data["housing"]["water"] * 0.991;
                        }
                        if (req.params.key == "travel") {
                            vehicleData += data["travel"]["vehicle"] * (2.475 / 16);
                            busData += data["travel"]["bus"] * (2.653 / 17);
                            taxiData += data["travel"]["taxi"] * (2.475 / 16);
                            railData += data["travel"]["rail"] * 0.007837;
                            flyingData += data["travel"]["flying"] * 0.115;
                        }
                        if (req.params.key == "food") {
                            whiteMeatData += data["food"]["whiteMeat"] * 0.00217;
                            dairyData += data["food"]["dairy"] * 0.00298;
                            vegetablesData += data["food"]["vegetables"] * 0.00259;
                            fruitData += data["food"]["fruit"] * 0.000874;
                            grainsData += data["food"]["grains"] * 0.000235;
                        }
                    });
                    electricityData /= usrArray.length;
                    fuelOilData /= usrArray.length;
                    lpgData /= usrArray.length;
                    wasteData /= usrArray.length;
                    waterData /= usrArray.length;
                    vehicleData /= usrArray.length;
                    busData /= usrArray.length;
                    taxiData /= usrArray.length;
                    railData /= usrArray.length;
                    flyingData /= usrArray.length;
                    whiteMeatData /= usrArray.length;
                    dairyData /= usrArray.length;
                    vegetablesData /= usrArray.length;
                    fruitData /= usrArray.length;
                    grainsData /= usrArray.length;

                    if (req.params.key == "housing") {
                        piechartArray = [
                            {
                                "name": "Electricity",
                                "y": electricityData,
                                sliced: true,
                                selected: true
                            },
                            {
                                "name": "Fuel Oil",
                                "y": fuelOilData
                            },
                            {
                                "name": "Natural Gas",
                                "y": lpgData
                            },
                            {
                                "name": "Waste",
                                "y": wasteData
                            },
                            {
                                "name": "Water",
                                "y": waterData
                            }
                        ];
                    }

                    if (req.params.key == "travel") {
                        piechartArray = [
                            {
                                "name": "Vehicle",
                                "y": vehicleData,
                                sliced: true,
                                selected: true
                            },
                            {
                                "name": "Bus",
                                "y": busData
                            },
                            {
                                "name": "Taxi",
                                "y": taxiData
                            },
                            {
                                "name": "Rail",
                                "y": railData
                            },
                            {
                                "name": "Flying",
                                "y": flyingData
                            }
                        ];
                    }

                    if (req.params.key == "food") {
                        piechartArray = [
                            {
                                "name": "White Meat",
                                "y": whiteMeatData,
                                sliced: true,
                                selected: true
                            },
                            {
                                "name": "Dairy",
                                "y": dairyData
                            },
                            {
                                "name": "Vegetables",
                                "y": vegetablesData
                            },
                            {
                                "name": "Fruit",
                                "y": fruitData
                            },
                            {
                                "name": "Grains",
                                "y": grainsData
                            }
                        ];
                    }
                    res.status(200).send(piechartArray);
                } else {
                    res.status(400).send("Unable to find the data");
                }

            });
        });



        router.put('/:id', function (req, res, next) {
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                if (data && data.docs && data.docs.length > 0) {
                    req.body["_id"] = data.docs[0]["_id"];
                    req.body["_rev"] = data.docs[0]["_rev"];
                    if (data.docs[0]["_id"]) {
                        db.insert(req.body, function (err, data1) {
                            if (!err) {
                                console.log('success', 'The record was updated successfully');
                                res.status(200).send(data1);
                            }
                            else {
                                console.log('failure', err);
                                res.status(400).send("Unable to insert the data");
                            }
                        });
                    } else {
                        res.status(400).send("Unable to find the data");
                    }
                } else {
                    res.status(400).send("Unable to find the data");
                }
            });
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = router;
