const mongoose = require("mongoose");
const Status = require("./Enum/Status");

const facilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        numberPhone: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        note: {
            type: String,
        },
        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {timestamps: true}
);
module.exports = mongoose.model("Facility", facilitySchema);