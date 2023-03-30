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

export const PostsManager = () => {
	React.useEffect(() => {
		const liveboardEmbed = new LiveboardEmbed('#embed', {
        frameParams: {
            width: '100%',
            height: '100%',
        },
        fullHeight: true,
        liveboardId: '3f9c48f5-c465-4785-abd5-38459e1f5d6d',
        //visibleActions: [Action.Save,Action.ShowUnderlyingData,Action.DownloadAsPDF]
    });
    liveboardEmbed.render();
	}, []);
	return (<div>
	  <Typography variant="h4">Liveboards</Typography>
	  <div id="embed"></div>
  	</div>)
};

export default PostsManager;