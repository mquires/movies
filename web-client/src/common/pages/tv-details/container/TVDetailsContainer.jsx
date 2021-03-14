import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPopularPersonsRequest } from '../../../../redux/persons-reducer';
import {
  getTVDetailsRequest,
  getTVKeywordsRequest,
  getTVCastRequest,
  getTVRecommendationsRequest,
  getSimilarTVRequest,
  getTVImagesRequest,
  getTVVideosRequest,
  sendFavoriteSerialRequest,
  deteleFavoriteTVByUserIdRequest,
  getTVDetailsByUserIdRequest
} from '../../../../redux/tv-reducer';

import TVDetails from '../component';

class TVDetailsContainer extends React.Component {
  componentDidMount() {
    const {
      getPopularPersonsRequest,
      getTVDetailsRequest,
      getTVKeywordsRequest,
      getTVCastRequest,
      getTVRecommendationsRequest,
      getSimilarTVRequest,
      getTVImagesRequest,
      getTVVideosRequest,
      getTVDetailsByUserIdRequest,
      match,
      userId
    } = this.props;

    getPopularPersonsRequest(1);
    getTVDetailsRequest(match.params.id);
    getTVKeywordsRequest(match.params.id);
    getTVCastRequest(match.params.id);
    getTVRecommendationsRequest(match.params.id);
    getSimilarTVRequest(match.params.id);
    getTVImagesRequest(match.params.id);
    getTVVideosRequest(match.params.id);
    getTVDetailsByUserIdRequest(userId, match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const {
        getTVDetailsRequest,
        getTVKeywordsRequest,
        getTVCastRequest,
        getTVRecommendationsRequest,
        getSimilarTVRequest,
        getTVImagesRequest,
        getTVVideosRequest,
        getTVDetailsByUserIdRequest,
        match,
        userId
      } = this.props;

      getTVDetailsRequest(match.params.id);
      getTVKeywordsRequest(match.params.id);
      getTVCastRequest(match.params.id);
      getTVRecommendationsRequest(match.params.id);
      getSimilarTVRequest(match.params.id);
      getTVImagesRequest(match.params.id);
      getTVVideosRequest(match.params.id);
      getTVDetailsByUserIdRequest(userId, match.params.id);
    }

    if (prevProps.userId !== this.props.userId) {
      const {
        getTVDetailsByUserIdRequest,
        userId,
        match
      } = this.props;

      getTVDetailsByUserIdRequest(userId, match.params.id);
    }
  }

  onSendFavoriteSerial(userId, tvId) {
    const {
      sendFavoriteSerialRequest
    } = this.props;

    sendFavoriteSerialRequest(userId, tvId);
  }

  onDeteleFavoriteTVByUserId(userId, tvId) {
    const {
      deteleFavoriteTVByUserIdRequest
    } = this.props;

    deteleFavoriteTVByUserIdRequest(userId, tvId);
  }

  render() {
    return (
      <TVDetails
        {...this.props}
        onSendFavoriteSerial={this.onSendFavoriteSerial.bind(this)}
        onDeteleFavoriteTVByUserId={this.onDeteleFavoriteTVByUserId.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularPersons: state.persons.popularPersons,
    tvDetails: state.tv.tvDetails,
    tvKeywords: state.tv.tvKeywords,
    TVCast: state.tv.TVCast,
    tvRecommendations: state.tv.tvRecommendations,
    similarTV: state.tv.similarTV,
    tvImages: state.tv.tvImages,
    tvVideos: state.tv.tvVideos,
    successSending: state.tv.successSending,
    userId: state.auth.userId,
    isFavoriteTV: state.tv.isFavoriteTV
  }
}

export default compose(
  connect(mapStateToProps, {
    getTVDetailsRequest,
    getPopularPersonsRequest,
    getTVKeywordsRequest,
    getTVCastRequest,
    getTVRecommendationsRequest,
    getSimilarTVRequest,
    getTVImagesRequest,
    getTVVideosRequest,
    sendFavoriteSerialRequest,
    deteleFavoriteTVByUserIdRequest,
    getTVDetailsByUserIdRequest
  }),
  withRouter
)(TVDetailsContainer);