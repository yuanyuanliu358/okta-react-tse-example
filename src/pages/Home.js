import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { init, AuthType, LiveboardEmbed, EmbedEvent } from '@thoughtspot/visual-embed-sdk';

export const Home = () => {
	React.useEffect(() => {
		const liveboardEmbed = new LiveboardEmbed('#embed', {
        frameParams: {
            width: '100%',
            height: '100%',
        },
        fullHeight: true,
        liveboardId: '0ee6fb0f-e7bf-4042-8d5d-c90d0412bf6c',
        //visibleActions: [Action.Save,Action.ShowUnderlyingData,Action.DownloadAsPDF]
    });
    liveboardEmbed.render();
	}, []);
	return (<div>
	  <Typography variant="h4">Welcome Home!</Typography>
	  <div id="embed"></div>
  	</div>)
};

export default Home;