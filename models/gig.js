const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    date: { type: Date, default: Date.now },
    gigs: [{
        userName: { type: String, required: true },
        email: { type: String, required: true },
        gigType: { type: String, required: "Santa" },
        gigDate: Date, //'2002-12-09'
        userNotes: { type: String, required: false },
        accepted: { type: Boolean, required: false },
        duration: { type: Number, required: true },
        price: { type: Number, required: true }

    },
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        gigType: { type: String, required: "DJ" },
        gigDate: Date, //'2002-12-09'
        userNotes: { type: String, required: false },
        accepted: { type: Boolean, required: false },
        duration: { type: Number, required: true },
        price: { type: Number, required: true }

    }
    ],

});


const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;