const router = require("express").Router();
const inventoryItemController = require("../controllers/inventoryItemController");

//ADD INVENTORY ITEM
router.post("/", inventoryItemController.addInventoryItem);

module.exports = router;
