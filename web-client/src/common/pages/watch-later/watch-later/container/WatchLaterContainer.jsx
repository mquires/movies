import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ROUTES from '../../../../constants/routes';

import WatchLater from '../component';
import WatchLaterTVContainer from '../../watch-later-tv/container';
import WatchLaterMoviesContainer from '../../watch-later-movies/container';

class WatchLaterContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${ROUTES.WATCH_LATER}`} render={() => <WatchLater {...this.props} />} />
        <Route path={`${ROUTES.WATCH_LATER}/movies`} render={() => <WatchLaterMoviesContainer {...this.props} />} />
        <Route path={`${ROUTES.WATCH_LATER}/serials`} render={() => <WatchLaterTVContainer {...this.props} />} />
      </Switch>
    );
  }
}

export default withRouter(WatchLaterContainer);