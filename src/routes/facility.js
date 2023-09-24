const router = require("express").Router();
const facilityController = require("../controllers/facilityController");

//ADD FACILITY
router.post("/", facilityController.addFacility);

module.exports = router;
