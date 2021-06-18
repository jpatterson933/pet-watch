const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Pet
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    findById: function(req, res) {
        db.Pet
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      },
    create: function (req, res) {
        console.log("create", req.body)
        db.Pet
            .create(req.body)
            .then(dbModel => {
                console.log("success");
                req.session.save(() => {
                  req.session.logged_in = true;
                  res.json({ pet: dbModel, token: req.session.feedToken, message: 'You are now logged in!' });
                });
            },
                err => {
                    console.log("fail", err);
                    res.status(400).json(err);
            });
    },
    update: function (req, res) {
        db.Pet
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err))
    },

    remove: function(req, res) {
        db.Pet
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove({_id: req.body._id}))
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(400).json(err));
      }
}