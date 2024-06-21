const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    deal_id: {
        type: String,
        required: true,
        unique: true
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true
    },
    deal_info: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

const Deal = mongoose.model("Deal", dealSchema);

module.exports = Deal;
