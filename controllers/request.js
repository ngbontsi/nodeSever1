const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const Request = require('../models/request');
exports.addRequest = (req, res, next) => {
    const request = new Request({
        firstname:req.body.category.name,
        userlocation: req.body.category.userlocation,
        altitude: req.body.category.altitude,
        longtude:req.body.category.longtude,
        username:req.body.category.username
    });
    request.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
exports.getAllRequests = (req, res, next) => {
    Request.find().then(
        (requests) => {
            res.status(200).json({requests,
                success: true});
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error,
                success: false
            });
        }
    );
};


exports.getRequestById = (req, res, next) => {
    Request.findOne({
        _id: req.params.id
    }).then(
        (request) => {
            res.status(200).json({request,success: true});
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error,
                success: false
            });
        }
    );
};

exports.updateRequest = (req, res, next) => {

    req.body.request = JSON.parse(req.body.request);
    let request = {
        firstname:req.body.category.name,
        userlocation: req.body.category.userlocation,
        altitude: req.body.category.altitude,
        longtude:req.body.category.longtude,
        username:req.body.category.username
    };

    request.updateOne({_id: req.params.id}, request).then(
        () => {
            res.status(201).json({
                message: 'Thing updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteRequest = (req, res, next) => {
    Request.findOne({_id: req.params.id}).then(
        (request) => {
            Request.deleteOne({_id: req.params.id}).then(
                () => {
                    res.status(200).json({
                        message: 'Deleted!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            );

        }
    );
};