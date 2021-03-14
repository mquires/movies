import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getWatchLaterRequest } from '../../../../../redux/watch-later-reducer';
import ROUTES from '../../../../constants/routes';

import WatchLaterMovies from '../component';

class WatchLaterMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getWatchLaterRequest,
      match,
      history,
      userId
    } = this.props;

    if (!match.params.id) {
      match.params.id = userId;
      if (!match.params.id) {
        history.push(ROUTES.LOGIN);
      }
    }

    getWatchLaterRequest(match.params.id);
  }

  render() {
    return (
      <WatchLaterMovies {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    watchLater: state.watchLater.watchLater,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getWatchLaterRequest
    }),
  withRouter
)(WatchLaterMoviesContainer);