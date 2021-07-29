const router = require('express').Router();
const boardController = require('./board.controller')



router.get('/list',boardController.showList); 
router.post('/article',boardController.createArticle);
router.get('/article',boardController.showArticle);
router.patch('/article',boardController.updateArticle);
router.delete('/article',boardController.deleteArticle);



module.exports = router;