const router = require('express').Router();
const userController = require('./user.controller');



router.delete('/', userController.deleteUser);
router.post('/', userController.createUser);
router.get('/', userController.showUser);
router.put('/', userController.updateUser);
router.get('/logout', userController.logoutUser)
router.get('/join/:nickname', userController.nicknameCheck)


module.exports = router;

