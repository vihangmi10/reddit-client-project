import request from 'request-promise';

const getRandomPost = async (req) => {
    let redditPost;
    let randomPostUrl = 'http://www.reddit.com/r/all/random.json';
    let post = await request.get(randomPostUrl);
    let jsonPost = JSON.parse(post);
    if (jsonPost.length !== 0) {
        redditPost = jsonPost[0].data.children;
    } else {
        throw new Error('Reddit api did not return an array');
    }
    return redditPost;

};

export default getRandomPost;