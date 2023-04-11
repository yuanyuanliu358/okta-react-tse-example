import React, { Fragment, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import PostsManager from './pages/PostsManager';
import { init, logout, AuthType, LiveboardEmbed, EmbedEvent } from '@thoughtspot/visual-embed-sdk';
import PostsList from './pages/PostsList';
import { withOktaAuth } from '@okta/okta-react';

window.TS_HOST =
  process.env.TS_HOST || `https://embed-1-do-not-delete.thoughtspotdev.cloud`;

// const USERNAME = "yualiu";
//const USERNAME = process.env.USERNAME;




const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

// const auth = {
//   oktaAuth: undefined
// }
// auth.oktaAuth.getUser()
// auth.oktaAuth = {
//   getUser
// }
const App = ({ classes, authService }) => {
  const [userName, setUsername] = useState(null);

  useEffect(() => {
    if (authService) {
      authService.getUser().then(user => {
        if (user) {
          const USERNAME = user.name;
          setUsername(USERNAME);
          init({
            thoughtSpotHost: window.TS_HOST,
            authType: AuthType.TrustedAuthToken,
            username:USERNAME,
            getAuthToken: () => {
              return fetch(`http://localhost:3030/api/gettoken/${USERNAME}`)
              // go to trusted auth server
                  .then(response => response.text());
              },
              disableLoginRedirect: true,
              autoLogin: false,
              //callPrefetch: true
          });
        }
      })
    }
  }, [authService]);//whenever authService changes
  return (
    <Fragment>
      <CssBaseline />
      <AppHeader />
      <main className={classes.main}>
        <Route exact path="/" component={Home} />
        <SecureRoute path="/posts" component={(...props) => <PostsList userName={userName} {...props} />} />
        <SecureRoute path="/post/:pinboardId" component={(...props) => <PostsManager userName={userName} {...props} />} />
        <Route path="/login/callback" component={LoginCallback} />
      </main>
    </Fragment>
  )
};

export default withStyles(styles)(withOktaAuth(App));
