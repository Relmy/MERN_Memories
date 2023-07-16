/**
 * Export all reducers.
 *
 * using combineReducers to combine all reducers into one.
 *
 * @see [Full Stack MERN Project - Part [1/2] - 44:38]{@link https://youtu.be/ngc9gnGgUdA?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&t=2678}
 */

import { combineReducers } from "redux";

import posts from './posts';

export default combineReducers({
    // all reducers
    posts, // posts: posts -> key and value are same so we only need one
});