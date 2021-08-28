const router = require('express').Router();
const userController = require('./user.controller');



router.post('/', userController.createUser);
router.get('/', userController.showUser);
router.patch('/', userController.updateUser);
router.delete('/', userController.deleteUser);
router.get('/logout', userController.logoutUser)
router.get('/join/:nickname', userController.nicknameCheck)


module.exports = router;

