const router = require('express').Router();
const boardController = require('./board.controller')
const commentController = require('./comment.controller')
const likeController = require('./like.controller')




router.get('/list', boardController.showList);
router.post('/write', boardController.createArticle);
router.get('/:id', boardController.showArticle);
router.put('/:id', boardController.updateArticle);
router.delete('/:id/:useridx', boardController.deleteArticle);


router.get('/comment/:board_id/:master/:skip', commentController.showComment)
router.post('/comment/:board_id/:master/:sub_master', commentController.createComment);
router.patch('/comment/:id/:writer', commentController.updateComment);
router.delete('/comment/:id/:writer', commentController.deleteComment);

router.post('/like', likeController.LikeAction)



module.exports = router;