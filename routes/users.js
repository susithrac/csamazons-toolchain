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
            //calculateCFData(copy);
            var document = req.body;
            var id = (document._id).split(":");
            console.log(id);
            var documentId = document._id;
            var documentId = document.name;
            delete document._id;
            delete document.name;
            var dataTobeAdded = document;
            console.log("here" + id[1]);
            db.find({ selector: { _id: "csamazon:" + id[1] } }, function (err, data) {
                if (data && data.docs && data.docs.length > 0) {
                    // req.body["_id"] = data.docs[0]["_id"];
                    var newObject = {};
                    newObject["_id"] = data.docs[0]["_id"];
                    newObject["_rev"] = data.docs[0]["_rev"];
                    let tempArray = data.docs[0][id[1]];

                    tempArray.push(dataTobeAdded);
                    console.log("New Temp Array");
                    //console.log(tempArray);
                    newObject[id[1]] = tempArray;
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
                } else {
                    console.log("Unable to find the data1");
                    console.log(copy);
                    let data = db.insert(copy);
                    if (data) {
                        res.status(200).send({ data: data });
                    } else {
                        res.status(400).send("Error during saving the new data");
                    }
                }
            });
        });
        function calculateCFData(data) {
            let housing = data["housing"];
            housing["electricity"] *= 0.85;
            housing["fuelOil"] *= 2.5;
            //Remove natural gas
            housing["lPG"] *= 2.983;
            data["housing"]["CF"]=housing["electricity"]+housing["fuelOil"]+housing["lPG"]; 

            let travel = data["travel"];
            let food = data["food"];
            let product = data["product"];
            let services = data["services"];
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
