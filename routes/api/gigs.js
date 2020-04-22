const router = require('express').Router();
const gigsController = require('../../client/controllers/gigsController');

router
    .route('/')
    .get(gigsController.findall)
    .post(gigsController.create);


router
    .route("/:id")
    .get(gigsController.findById)
    .put(gigsController.update)

module.exports = router;