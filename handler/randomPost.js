import request from 'request-promise';

const getRandomPost = async (req, res) => {
    let redditPosts;
    let randomPostUrl = 'http://www.reddit.com/r/all/random.json';
    let post = await request.get(randomPostUrl);
    let jsonPost = JSON.parse(post);
    if (jsonPost.length !== 0) {
        redditPosts = jsonPost[0].data.children;
    } else {
        throw new Error('Reddit api did not return an array');
    }
    console.log(redditPosts);
    let subRedditObject = {
        redditPosts: redditPosts
    };
   return subRedditObject;


};

export default getRandomPost;