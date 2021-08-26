const router = require('express').Router();
const boardController = require('./board.controller')
const commentController = require('./comment.controller')
const likeController = require('./like.controller')




router.get('/list', boardController.showList);
router.post('/write', boardController.createArticle);
router.get('/:board_id', boardController.showArticle);
router.get('/update/:board_id', boardController.updateCheck);
router.put('/:board_id/:writer', boardController.updateArticle);
router.delete('/:board_id/:writer', boardController.deleteArticle);


router.post('/comment/:board_id/:root/:target', commentController.createComment);
router.get('/comment/:board_id/:root/:skip/:type', commentController.showComment)
router.patch('/comment/:comment_id/:writer', commentController.updateComment);
router.delete('/comment/:comment_id/:writer', commentController.deleteComment);

router.post('/like', likeController.LikeAction)



module.exports = router;