const MovieController = require("../controllers/MovieController")
const router = require("express").Router();

router.post("/addmovie",MovieController.addMovie)
router.get("/allmovie",MovieController.getAll)
router.get("/:id",MovieController.GetAnMovie)
router.put("/:id",MovieController.UpdateMovie)
router.delete("/:id",MovieController.deleteMovie)


module.exports = router