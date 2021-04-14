const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const User = require('../models/user');
exports.signup = (req, res, next) => {

    console.log("Printing request body: ", req.body);
    console.log("checking for params :", req.params);
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
          firstname: req.body.firstname,
          email: req.body.email,
          password: hash
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!',
              success: true
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error,
              success: false
          });
        }
      );
    }
  );
};

exports.login = (req, res, next) => {
    console.log("entering Login method :", req.body)
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('User not found!'),
            success: false
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!'),
                success: false
            });
          }
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' });
          res.status(200).json({
              user: user,
            token: token,
              success: true
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error,
              success: false
          });
        }
      );
    }
  ).catch(
    (error) => {
      res.status(500).json({
        error: error,
          success: false
      });
    }
  );
};

exports.getAllUsers = (req, res, next) => {
    User.find().then(
        (users) => {
            res.status(200).json({users,
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


exports.getUserById = (req, res, next) => {
    User.findOne({
        _id: req.params.id
    }).then(
        (user) => {
            res.status(200).json({user,success: true});
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

exports.modifyUser = (req, res, next) => {
    let user = new User({ _id: req.params._id });

        req.body.user = JSON.parse(req.body.user);
    user = {
            firstname: req.body.firstname,
            email: req.body.email
        };

    User.updateOne({_id: req.params.id}, user).then(
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

exports.deleteUser = (req, res, next) => {
    User.findOne({_id: req.params.id}).then(
        (user) => {
            const filename = user.imageUrl.split('/images/')[1];
            fs.unlink('images/' + filename, () => {
                User.deleteOne({_id: req.params.id}).then(
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
            });
        }
    );
};

