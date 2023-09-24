const Facility = require("../models/Facility");

const facilityController = {
    addFacility: async (req, res) => {
        try {
            const existingFacility = await Facility.findOne({ name: req.body.name });
            if (existingFacility) {
                return res.status(400).json({ message: "Facility name already exists" });
            }
            const facility = await new Facility({
                name: req.body.name,
                description: req.body.description,
                numberPhone:req.body.numberPhone,
                email:req.body.email,
                address:req.body.address,
                note:req.body.note,
                user:req.body.user,

            });
            const savedFacility = await facility.save();

            res.status(200).json(savedFacility);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
};
module.exports = facilityController;
