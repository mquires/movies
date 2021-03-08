import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getWatchLaterRequest } from '../../../../../redux/watch-later-reducer';

import WatchLaterMovies from '../component';

class WatchLaterMoviesContainer extends React.Component {
  componentDidMount() {
    const {
      getWatchLaterRequest,
      match,
      history
    } = this.props;

    if (!match.params.id) {
      match.params.id = localStorage.getItem('id');
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
    watchLater: state.watchLater.watchLater
  }
}

export default compose(
  connect(mapStateToProps,
    {
      getWatchLaterRequest
    }),
  withRouter
)(WatchLaterMoviesContainer);