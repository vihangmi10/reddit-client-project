import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.json({users: [{name: 'Timmy'}]});
    res.render('redditPostPage');
});

export default router;

