const router = require('express').Router();
const mainRouter = require('./main/index');
const userRouter = require('./user/index');
// const boardRouter = require('./board/index');
const apiRouter = require('./api/index')

router.use('/', mainRouter);
router.use('/user', userRouter);
// router.use('/board', boardRouter);
router.use('/api', apiRouter);

module.exports = router;