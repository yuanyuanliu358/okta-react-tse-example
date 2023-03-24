import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import PostsManager from './pages/PostsManager';
import { init, AuthType, LiveboardEmbed, EmbedEvent } from '@thoughtspot/visual-embed-sdk';


init({
    thoughtSpotHost: "https://10.87.89.86",
    authType: AuthType.TrustedAuthToken,
    username: "tsadmin",
    getAuthToken: () => {
  return fetch(`https://localhost:3030/api/gettoken/tsadmin`)
      .then(response => response.json())
      .then(json => json.token);
    },
    disableLoginRedirect: true,
    autoLogin: true,
    //callPrefetch: true
});




const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <SecureRoute path="/posts" component={PostsManager} />
      <Route path="/login/callback" component={LoginCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
