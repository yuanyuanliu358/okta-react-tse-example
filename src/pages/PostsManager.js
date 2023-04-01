import React, { Component, Fragment } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import { withRouter, Route, Redirect, Link, useParams } from 'react-router-dom';
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

import { init, AuthType, LiveboardEmbed, EmbedEvent, RuntimeFilterOp } from '@thoughtspot/visual-embed-sdk';

export const PostsManager = () => {
  let { pinboardId } = useParams();
	React.useEffect(() => {
    if (pinboardId) {
      const liveboardEmbed = new LiveboardEmbed('#embed', {
          frameParams: {
              width: '100%',
              height: '100%',
          },
          fullHeight: true,
          liveboardId: pinboardId,
          
          runtimeFilters: [{
            columnName: 'sales',
            operator: RuntimeFilterOp.GE,
            values: ['1000']
        }]
      });
      liveboardEmbed.render();
    }
	}, [pinboardId]);
	return (<div>
	  <Typography variant="h4">Liveboards</Typography>
	  <div id="embed"></div>
  	</div>)
};

export default PostsManager;