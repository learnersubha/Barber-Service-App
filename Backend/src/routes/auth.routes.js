const express = require ('express')
const authController = require ('../controllers/auth.controller')


const router = express.Router()

router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)
router.post('/barbar/register',authController.registerBarbar)
router.post('/barbar/login',authController.loginBarbar)
router.get('/barbar/logout',authController.logoutBarbar)

module.exports = router;