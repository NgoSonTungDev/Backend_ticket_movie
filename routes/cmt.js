const commentController = require("../controllers/commentController")
const router = require("express").Router();

router.post("/addcomment",commentController.addCmt)
router.get("/allcomment",commentController.GetAllCmt)
router.delete("/:id",commentController.Deletecmt)



module.exports = router