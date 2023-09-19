const mongoose = require("mongoose");

const Status = require("../models/Enum/Status");

const ServiceType = {
    GOOGLE: "GOOGLE",
    FACEBOOK: "FACEBOOK",
    NORMAL: "NORMAL",
};

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },

        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
        image: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        numberPhone: {
            type: String,
        },
        birthday: {
            type: Number,
        },
        shop: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Shop",
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
        serviceType: {
            type: String,
            enum: [ServiceType.NORMAL, ServiceType.GOOGLE, ServiceType.FACEBOOK],
            default: ServiceType.NORMAL,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
