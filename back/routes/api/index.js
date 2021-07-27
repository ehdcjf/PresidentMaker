const router = require('express').Router();
const apiController = require('./api.controller')

router.get('/kakao', apiController.get_code)


module.exports = router;