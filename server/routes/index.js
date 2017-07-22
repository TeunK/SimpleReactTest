var express = require('express');
var router = express.Router();
var async = require('async');
var ObjectID = require('mongodb').ObjectID;
var serverData = require('../settings/serverData.js');
var errorCodes = require('../settings/errorCodes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all_students', function(req, res) {
    var db = req.db;
    var collection = db.get(serverData.dbCollections.users.students);
    collection.find({},{},function(e,data){
        res.json(data);
    });
});

//insert new student
router.post('/register_student', function(req, res) {
    var data = (req.body);

    req.check('name', 'Name must be defined').notEmpty();
    req.check('email', 'email does not match format s1581763@ed.ac.uk').isValidEmail();
    req.check('password', 'password is not of length 6 to 24').notEmpty().len(6, 24);
    req.check('gender', 'invalid gender type').isMaleOrFemale();

    var errors = req.validationErrors(true);
    if (errors) {
        //errors format: {param:{param:..., msg:..., value:...}}
        res.json({"errors":errors});
    } else {
        var db = req.db;
        var collection = db.get(serverData.dbCollections.users.students);
        console.log(JSON.stringify(data, null, 2));
        data.addedDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        collection.insert(data, function(err, result) {
            if (err) {
                if (err.code == errorCodes.duplicateEntry) {
                    res.json({error: true, message: "A student with this email was already registered"})
                } else {
                    res.json(err)
                }
            } else if (result) {
                res.json({message: "Student was added successfully!"});
            } else {
                res.json(err);
            }
        });
    }
});

router.get('/delete_all_students', function(req, res) {
    var db = req.db;
    var collection = db.get(serverData.dbCollections.users.students);
    collection.remove({},function(err, removed){
        if (err) {res.json(err)}
        if (removed) {
            res.json(JSON.stringify(removed))
        }
    });
});


module.exports = router;
