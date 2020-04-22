const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.nextTick.MONGOD_URI ||
    "mongodb://localhost/gigslist"
);

const gigSeed = [{
    date: new Date().setDate(new Date().getDate() - 10),
    gigs: [
        {
            tite: "santa",
            userName: "Rockie Beatty",
            userEmail: "Rbeatty@gmail.com",
            length: 3,
            confirmation: true,
            notes: '10 kids ages 3-5',
            gigDate: new Date().setDate(new Date().getDate() + 10)
        }
    ]
},
];

db.Gig
    .remove({})
    .then(() => db.Gig.collection.insertMany(gigSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });
