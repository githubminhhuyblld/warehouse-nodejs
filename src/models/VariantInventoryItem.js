const mongoose = require("mongoose");
const Status = require("./Enum/Status");

const variantInventoryItemtSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "InventoryItem",
            required: true,
        },
        sku: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            default: 0,
        },
        attributes: {
            type: Map,
            of: String, //  {color: 'red', size: 'L'}
        },
        image: {
            type: String,
        },
        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("VariantInventoryItem", variantInventoryItemtSchema);
