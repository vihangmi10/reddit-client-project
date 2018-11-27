import express from 'express';
import getNewPost from '../handler/subredditPosts';
import getRandomPost from '../handler/randomPost';
const router = express.Router();

router.get('/', async (req, res)=> {
    let typeOfPost = 'new';
    let postsToSend = await getNewPost(req, typeOfPost);
    res.status(200).send(postsToSend);

});

router.get('/hot',async (req, res) => {
    let typeOfPost = 'hot';
    let postsToSend = await getNewPost(req, typeOfPost);
    res.status(200).send(postsToSend);
});

router.get('/random',async (req, res) => {
    let postsToSend = await getRandomPost(req);
    res.status(200).send(postsToSend);
});

router.get('/top',async (req, res) => {
    let typeOfPost = 'top';
    let postsToSend = await getNewPost(req, typeOfPost);
    res.status(200).send(postsToSend);
});

export default router;