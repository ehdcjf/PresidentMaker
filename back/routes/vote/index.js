const router = require('express').Router();
const voteController = require('./vote.controller');



// router.get('/election', voteController.showElection)

router.get('/', voteController.showResult);
router.get('/last', voteController.showLast);



module.exports = router;