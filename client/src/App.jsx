import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import './App.css';
import useStyles from './style.js';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Are you new to Material UI?
            Have you heard about it but never actually tried it out? 
            Maybe you dived into it but it felt overwhelming? 
            It's easy to learn if you know where to start! 
            This video will help you to get started quickly.
            </Typography>
            <div classNam={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h5">Heading</Typography>
                  <Typography>This is media card</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give footer a purpose.
        </Typography>
      </footer>
    </>
  );
}

export default App;