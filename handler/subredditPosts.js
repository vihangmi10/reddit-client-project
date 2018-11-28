import request from 'request-promise';

const getNewPosts = async (req, typeOfPost) => {
    let before = null;
    let queryParameter = {};
    let redditnewPostURL = `http://www.reddit.com/r/all/${typeOfPost}.json`;
    let page_number = req.query.page ? req.query.page : 1;

    if (page_number > 1 && req.query.before || req.query.after){
       if (req.query.before){
           queryParameter['before'] = req.query.before;
       } else {
           queryParameter['after'] = req.query.after;
       }
    }
    let requestOptions = {
        uri: redditnewPostURL,
        qs: queryParameter
    };
    let postsFromReddit = await request.get(requestOptions);
    let postsInJson = JSON.parse(postsFromReddit);
    const total_posts = postsInJson.data.dist;
    let posts = postsInJson.data.children;
    console.log('Posts ---- ', posts);
    let after = postsInJson.data.after ? postsInJson.data.after : posts[total_posts-1].data.name;

    if(page_number > 1) {
        before = postsInJson.data.before ? postsInJson.data.before : posts[0].data.name;
    }

    let subRedditObject = {
        total_subreddits: total_posts,
        previousPosts: before,
        nextPosts: after,
        redditPosts: posts
    };
    return subRedditObject;
};
export default getNewPosts;