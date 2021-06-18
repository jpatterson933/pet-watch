const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const PetSchema = new Schema({
    petname: {
        type: String,
        minLength: 6,
    },
    password: {
        type: String,
        minLength: 6,
    },
});


PetSchema.pre("save", function (next) {
    const pet = this;
    pet.password = bcrypt.hashSync(pet.password, 10);
    return next();
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;