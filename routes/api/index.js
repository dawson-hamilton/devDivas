const router = require("express").Router();
const gigRoutes = require("./gigs");
const giggerRoutes = require("./giggers");

// gig routes
router.use("/gigs", gigRoutes);
router.use("/artists", giggerRoutes);

module.exports = router;
