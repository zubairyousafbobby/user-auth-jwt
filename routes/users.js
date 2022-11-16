var express = require('express');
var router = express.Router();


const authController = require('../controllers/auth.controller');
const authGuard = require('../middleware/auth.guard');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile',      authGuard, authController.getUser);
router.get('/logout',    authGuard,authController.logout);

router.all('*',  (req, res) => res.status(400).json({ message: 'Bad Request.'}))

/* GET users listing. */
router.get('/test1', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
