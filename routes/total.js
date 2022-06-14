const OrderConsolidationController = require("../controllers/totalController")
const router = require("express").Router();

router.post("/addToOrder",OrderConsolidationController.addToTotal)
router.get("/GetAllToOrder",OrderConsolidationController.getAllOrder)
router.delete("/:id",OrderConsolidationController.deleteOrder)


module.exports = router