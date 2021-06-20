const db = require("../models");

module.exports = {
    create: function (req, res) {

        console.log("create", req.body)

        db.Pet
            .create(req.body)
            .then(dbModel => {
                console.log("success");
                //save the current session
                req.session.save(() => {
                    //change our logged in status to true when a person creates a profile
                  req.session.logged_in = true;
                  res.json({ pet: dbModel, message: 'You are now logged in!' });
                });
            },
                err => {
                    console.log("fail", err);
                    res.status(400).json(err);
            });
    }
}