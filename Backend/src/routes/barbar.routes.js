const express = require ('express')
const barbarController = require ('../controllers/barbar.controller')

const router = express.Router();

router.get("/", barbarController.getAllBarbar)
router.get("/:id", barbarController.getBarbarById)


module.exports = router;