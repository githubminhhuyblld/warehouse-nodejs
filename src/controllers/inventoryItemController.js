const InventoryItem = require("../models/InventoryItem");

const inventoryItemController = {
    addInventoryItem: async (req, res) => {
        try {

            const inventoryItem = await new InventoryItem({
                name: req.body.name,
                description: req.body.description,
                sku:req.body.sku,
                category:req.body.category,
                price:req.body.price,
                quantity:req.body.quantity,
                image:req.body.image,
                attributes: req.body.attributes

            });
            const savedInventoryItem = await inventoryItem.save();

            res.status(200).json(savedInventoryItem);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
};
module.exports = inventoryItemController;
