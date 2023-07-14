import axios from 'axios';

const url = 'http://localhost:5000/api/posts/'; // url pointing to our backend route
// 'http://localhost:5000/api/posts/' is the route we created in the backend that will return all the posts in the database

const fetchPosts = () => axios.get(url); // get all posts