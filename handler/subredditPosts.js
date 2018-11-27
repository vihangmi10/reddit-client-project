import request from 'request-promise';

const number_of_reviews_per_page = 10;

const getNewPosts = async (req, typeOfPost) => {
    let arrayOfPosts = [];
    let redditnewPostURL = `http://www.reddit.com/r/all/${typeOfPost}.json`;
    let page_number = req.query.page ? req.query.page : 1;
    let postsFromReddit = await request.get(redditnewPostURL);
    let postsInJson = JSON.parse(postsFromReddit);
    const total_posts = postsInJson.data.dist;
    let posts = postsInJson.data.children;
    if (page_number * number_of_reviews_per_page > total_posts) {
        throw new Error('Reviews exceeded');
    }
    else {
        if (page_number === 1) {
            arrayOfPosts = posts.slice(0,(number_of_reviews_per_page * page_number));
        }else {
            arrayOfPosts = posts.slice(((number_of_reviews_per_page * page_number) - (number_of_reviews_per_page)), (number_of_reviews_per_page * page_number));
        }

        console.log('SLICED ARRAY IS ------ ', arrayOfPosts);
    }
    return postsFromReddit;
};
export default getNewPosts;