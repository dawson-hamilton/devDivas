const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    title: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    confirmation: { type: Boolean, required: false },
    date: { type: Date, default: Date.now },
    gigDate: { type: Date }
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;