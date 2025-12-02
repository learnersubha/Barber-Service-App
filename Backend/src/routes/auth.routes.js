const express = require ('express')
const authController = require ('../controllers/auth.controller')
const auth = require('../middlewares/auth.middleware')



const router = express.Router()

router.post('/user/register',authController.registerUser)
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)
router.get('/user/me', auth.userAuth,  authController.findUser)
router.post('/barbar/register',authController.registerBarbar)
router.post('/barbar/login',authController.loginBarbar)
router.get('/barbar/logout',authController.logoutBarbar)
router.get('/barbar/me',auth.barbarAuth, authController.findBarbar)



module.exports = router;