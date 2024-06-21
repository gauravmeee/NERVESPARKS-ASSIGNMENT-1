const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    car_id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    car_info: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
