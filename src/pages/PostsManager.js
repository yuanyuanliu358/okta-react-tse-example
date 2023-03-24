import React, { Component, Fragment } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import { withRouter, Route, Redirect, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import moment from 'moment';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';

import PostEditor from '../components/PostEditor';
import ErrorSnackbar from '../components/ErrorSnackbar';

import { init, AuthType, LiveboardEmbed, EmbedEvent } from '@thoughtspot/visual-embed-sdk';

const styles = theme => ({
});

// const liveboardEmbed = new LiveboardEmbed('#embed', {
//         frameParams: {
//             width: '100%',
//             height: '100%',
//         },
//         fullHeight: true,
//         liveboardId: '0ee6fb0f-e7bf-4042-8d5d-c90d0412bf6c',
//         //visibleActions: [Action.Save,Action.ShowUnderlyingData,Action.DownloadAsPDF]
//     });
//     liveboardEmbed.render();

class PostsManager extends Component {

  render() {

    return (
      <Fragment>
        <Typography variant="h4">Live Board</Typography>

      </Fragment>
    );
  }
}

export default compose(
  withOktaAuth,
  withRouter,
  withStyles(styles),
)(PostsManager);
