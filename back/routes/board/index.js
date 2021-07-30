const router = require('express').Router();
const boardController = require('./board.controller')



router.get('/list',boardController.showList); 
router.post('/write',boardController.createArticle);
router.get('/:id',boardController.showArticle);
router.patch('/:id',boardController.updateArticle);
router.delete('/:id',boardController.deleteArticle);



module.exports = router;