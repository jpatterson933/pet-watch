const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Pet
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).json(err));
    },
    create: function (req, res) {
        // console.log("create", req.body)
        db.Pet
        .create(req.body)
            .then(dbModel => {
                //compare passwords here
                if (req.body.password !== req.body.confirmPassword) {
                    console.log(req.body.password, req.body.confirmPassword, "Passwords do not match");
                } else {
                    console.log("success");
                    //save the current session
                    req.session.save(() => {
                        //change our logged in status to true when a person creates a profile
                        req.session.logged_in = true;
                        res.json({ pet: dbModel, message: 'You are now logged in!' });
                    });
                }
            },
                err => {
                    console.log("fail", err);
                    res.status(400).json(err);
            });
    }
}