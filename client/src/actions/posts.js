//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api';

// Action Creators -> functions that return actions
//     action: an abject with a type property and a payload
export const getPosts = () => async (dispatch) => {
  try {
    // try to fetch data from api
    const { data } = await api.fetchPosts(); // api give a response object with a data property

    // const action = { type: 'FETCH_ALL', payload: data }
    dispatch({ type: 'FETCH_ALL', payload: data }); // thunk -> dispatch the action instead of returning 
  } catch (error) {
    console.log(error.message);
  }
};

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };