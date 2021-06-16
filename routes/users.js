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
            var document = req.body;
            console.log(document);
            try {
                let data = db.insert(document);
                res.send({ data: data });
            } catch (err) {
                console.log(err);
                res.status(400).send('Could not insert the data');
            }
        });

        router.get('/:id', function (req, res, next) {
            console.log(req.params.id);
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                if (!err) {
                    console.log(data);
                    res.send(data);
                } else {
                    res.status(400).send("Unable to find the data");
                }

            });
        });

        router.put('/:id', function (req, res, next) {
            db.find({ selector: { _id: "csamazon:" + req.params.id } }, function (err, data) {
                req.body["_id"] = data.docs[0]["_id"];
                req.body["_rev"] = data.docs[0]["_rev"];
                if (data.docs[0]["_id"]) {
                    db.insert(req.body, function (err, data1) {
                        if (!err) {
                            console.log('success', 'The record was updated successfully');
                            res.send(data1);
                        }
                        else {
                            console.log('failure', err);
                            res.status(400).send("Unable to insert the data");
                        }
                    });
                }else{
                    res.status(400).send("Unable to find the data");
                }
            });
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = router;
