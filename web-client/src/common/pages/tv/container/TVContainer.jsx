import React from 'react';
import { connect } from 'react-redux';
import {
  getTVRequest,
  findTVRequest,
  getTodayTrendingTVRequest
} from '../../../../redux/tv-reducer';

import TV from '../component';

class TVContainer extends React.Component {
  componentDidMount() {
    const {
      getTVRequest,
      getTodayTrendingTVRequest
    } = this.props;

    getTVRequest();
    getTodayTrendingTVRequest();
  }

  onTVMovie(tv) {
    const {
      findTVRequest
    } = this.props;

    findTVRequest(tv.search);
  }

  render() {
    const {
      tv,
      todayTrendingTV
    } = this.props;

    return (
      <TV
        tv={tv}
        todayTrendingTV={todayTrendingTV}
        onChange={this.onTVMovie.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tv: state.tv.tv,
    todayTrendingTV: state.tv.todayTrendingTV
  }
}

export default connect(mapStateToProps,
  {
    getTVRequest,
    findTVRequest,
    getTodayTrendingTVRequest
  })(TVContainer);