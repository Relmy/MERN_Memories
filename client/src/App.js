import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; // Uses n

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

import { appStyle } from './styles.js';
// //import useStyles from './styles';//

const App = () => {
    // using sx prop to style components
    const styles = appStyle;
    // //const classes = useStyles();//

    return (
        <Container maxwidth="lg">
            {/* use sx instead of className={classes.appBar} */}
            <AppBar sx={styles.appBar} position="static" color="inherit">
                <Typography sx={styles.heading} variant="h2" align="center">Memories</Typography>
                <img sx={styles.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;