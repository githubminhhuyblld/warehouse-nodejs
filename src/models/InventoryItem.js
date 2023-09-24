const mongoose = require("mongoose");
const Status = require("./Enum/Status");

const inventoryItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        sku: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
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
        category: {
            type: String,
        },
        attributes: {
            type: Map,
            of: String, // {color: 'red', size: 'L'}
        },
        image: {
            type: String,
        },
        variants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VariantInventoryItem'
        }],
        status: {
            type: String,
            enum: [Status.ACTIVE, Status.INACTIVE, Status.DELETED],
            default: Status.ACTIVE,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("InventoryItem", inventoryItemSchema);
