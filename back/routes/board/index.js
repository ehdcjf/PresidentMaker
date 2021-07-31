const router = require('express').Router();
const boardController = require('./board.controller')
const commentController = require('./comment.controller')




router.get('/list', boardController.showList);
router.post('/write', boardController.createArticle);
router.get('/:id', boardController.showArticle);
router.patch('/:id', boardController.updateArticle);
router.delete('/:id', boardController.deleteArticle);

router.post('/comment');
router.patch('/comment');
router.delete('/comment');


module.exports = router;