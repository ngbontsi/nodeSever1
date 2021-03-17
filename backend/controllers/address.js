const Address = require('../models/address');
const fs = require('fs');

exports.createThing = (req, res, next) => {
  req.body.address = JSON.parse(req.body.address);
  const url = req.protocol + '://' + req.get('host');

  const address = new Address({
    streetName: req.body.address.streetname,
    suburb: req.body.address.suburb,
    region: req.body.address.region,
    poBox: req.body.address.pobox,
    user_id: req.body.address.user_id
  });

  address.save().then(
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

exports.getOneThing = (req, res, next) => {
  Address.findOne({
    _id: req.params.id
  }).then(
    (address) => {
      res.status(200).json(address);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyThing = (req, res, next) => {
  let thing = new Thing({ _id: req.params._id });

  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    req.body.thing = JSON.parse(req.body.thing);
    thing = {
      _id: req.params.id,
      title: req.body.thing.title,
      description: req.body.thing.description,
      imageUrl: url + '/images/' + req.file.filename,
      price: req.body.thing.price,
      userId: req.body.thing.userId
    };
  } else {
    thing = {
      _id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    };
  }
  Thing.updateOne({_id: req.params.id}, thing).then(
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

exports.deleteThing = (req, res, next) => {
  Address.findOne({_id: req.params.id}).then(
    (address) => {
      const filename = address.imageUrl.split('/images/')[1];
      fs.unlink('images/' + filename, () => {
        Address.deleteOne({_id: req.params.id}).then(
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

exports.getAllStuff = (req, res, next) => {
  Address.find().then(
    (address) => {
      res.status(200).json(address);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
