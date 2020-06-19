const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need a way to save gigger image for their gig posting

const giggersSchema = new Schema({
    gigger:{type: String},
    gigName:{type:String},
    gigDesc:{type:String},
    pricePerHour:{type:Number},
    ratingScore:{type:Number},
    ratingNumber:{type:Number},
    gigName:{type:String},
})

const Giggers = mongoose.model("Giggers", giggersSchema);

module.exports = Giggers;