const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    date: { type: Date, default: Date.now },
    addressOne: { type: String, required: true },
    city: { type: String, required: true },
    endTime: { type: String, required: true },
    startTime: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: false },
    email: { type: String, required: false },
    gigType: { type: String, required: false },
    gigDate: Date, //'2002-12-09'
    userNotes: { type: String, required: false },
    accepted: { type: Boolean, required: false },
    duration: { type: Number, required: true },
    price: { type: Number, required: true }
});


const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;