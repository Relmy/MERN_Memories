import axios from 'axios';

const url = 'http://localhost:3000/posts/'; // url pointing to our backend route
// 'http://localhost:3000/posts/' is the route we created in the backend that will return all the posts in the database

export const fetchPosts = () => axios.get(url); // get all posts