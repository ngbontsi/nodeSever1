const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const Category = require('../models/category');
exports.addCat = (req, res, next) => {
    const category = new Category({
        name: req.body.category.name,
        description: req.body.category.description
    });

    category.save().then(
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
exports.getAllCategories = (req, res, next) => {
    Category.find().then(
        (categories) => {
            res.status(200).json({categories,
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


exports.getCategoryById = (req, res, next) => {
    Category.findOne({
        _id: req.params.id
    }).then(
        (category) => {
            res.status(200).json({category,success: true});
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

exports.updateCategory = (req, res, next) => {
    let category = new Category({ _id: req.params._id });

        req.body.category = JSON.parse(req.body.category);
    category = {
            name: req.body.name,
            description: req.body.description
        };

    category.updateOne({_id: req.params.id}, category).then(
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

exports.deleteCategory = (req, res, next) => {
    Category.findOne({_id: req.params.id}).then(
        (category) => {
                Category.deleteOne({_id: req.params.id}).then(
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