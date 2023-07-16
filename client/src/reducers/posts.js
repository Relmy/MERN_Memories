/**
 * Post Reducer.
 *
 * post reducer file.
 */

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            // return the posts
            return action.payload; // action.payload is { data } from api response, aka the posts
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}