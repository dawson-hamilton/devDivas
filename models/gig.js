const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    dateBooked: { type: Date, default: Date.now },
    date: { type: String },
    addressOne: { type: String, required: false },
    addressTwo: { type: String, required: false },
    city: { type: String, required: false },
    endTime: { type: String, required: false },
    startTime: { type: String, required: false },
    state: { type: String },
    zip: { type: String, required: false },
    gigDate: Date, //'2002-12-09'
    userNotes: { type: String, required: false },

});


const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;