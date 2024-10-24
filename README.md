# MERN Memories

Simple application utilizing MERN Stack (React, Node.js, Express & MongoDB)

This repository is based on the video series, [**Full Stack MERN Application**](https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu "Link to playlist") by *JavaScript Mastery*.
As this series was initially created in October 2020 some techniques are outdated and have been adjusted. See [Notable Deviations](#notable-deviations) below.

## Structure

Both client and server are included in this repository for simplicity.

### `npm start`

#### Client

Runs the app in the development mode when run in `/client`.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### Server

When run in `/server` it will start the server on port : 5000.

## Notable Deviations 

### Redux 
JavaScript Mastery (JSM) use the old version and structure of Redux. I will be using the [**Redux Toolkit**](https://redux.js.org/tutorials/quick-start) and following the [recommended app structure](https://redux.js.org/tutorials/essentials/part-2-app-structure).