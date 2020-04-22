const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    date: { type: Date, default: Date.now },
    gigs: [
        {
            title: { type: String, required: "santa" },
            userName: { type: String, required: true },
            userEmail: { type: String, required: true },
            length: { type: Number, required: [1, 1.5, 2, 2.5, 3, 4] },
            confirmation: { type: Boolean, required: false },
            notes: { type: String, required: false },
            gigDate: { type: Date }

        }
    ]
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;