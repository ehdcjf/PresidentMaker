const router = require('express').Router();
const boardController = require('./board.controller')
const commentController = require('./comment.controller')
const likeController = require('./like.controller')




router.get('/list', boardController.showList);
router.post('/write', boardController.createArticle);
router.get('/:id', boardController.showArticle);
router.put('/:id', boardController.updateArticle);
router.delete('/:id/:useridx', boardController.deleteArticle);


router.get('/comment/:master/:comment_id', commentController.showRyple)
router.post('/comment/:board_id/:master', commentController.createComment);
router.patch('/comment/:comment_id', commentController.updateComment);
router.delete('/comment/:comment_id', commentController.deleteComment);

router.post('/like', likeController.LikeAction)



module.exports = router;