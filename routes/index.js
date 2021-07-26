const router = require('express').Router(); 
const mainRouter = require('./main/index');
const userRouter = require('./user/index'); 
const boardRouter = require('./board/index');


router.use('/',mainRouter);
router.use('/user',userRouter);
router.use('/board',boardRouter);

module.exports = router; 