import React from "react";

import Post from "./Post/Post";
// //import useStyles from './styles';//
import { postsStyle } from './styles.js';

const Posts = () => {
    // //const classes = useStyles();//
    // using sx prop to style components
    const styles = postsStyle;

    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;

/*

return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );

*/