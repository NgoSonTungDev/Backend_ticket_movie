const OrderhistoryController = require("../controllers/HistoryController")
const router = require("express").Router();

router.post("/addToHistory",OrderhistoryController.addToOrderhistory)
router.delete("/:id",OrderhistoryController.DeleteFromOrderhistory)


module.exports = router