var express = require('express');
var router=express.Router();
var student = require('./studentmodel');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studentdb');
router.get('/', function(req,res) {
    student.find().exec(function(err,result) {
        res.status(200).json(result);
    });
    
});

router.get('/:id', function(req,res) {
    student.findById(req.params.id).exec(function(err,result) {
        res.status(200).json(result);
    });
});



router.post('/', function(req,res) {
    var std = new student(req.body);
    std.save(function(err,result) {
        res.status(201).json(result);
    });

    
});
router.put('/:id', function(req,res) {
    student.findByIdAndUpdate(req.params.id,req.body).exec(function(err,result) {
        student.findById(req.params.id).exec(function(err,result) {
            res.status(200).json(result);
        });

    });
});
router.delete('/:id', function(req,res) {
    student.findByIdAndRemove(req.params.id).exec(function(err,result) {
        student.find().exec(function(err,result) {
            res.status(200).json(result);
        });

    });
});

module.exports = router;