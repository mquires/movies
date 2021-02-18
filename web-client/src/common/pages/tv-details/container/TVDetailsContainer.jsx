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
  getTVImagesRequest
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
      match
    } = this.props;

    getPopularPersonsRequest(1);
    getTVDetailsRequest(match.params.id);
    getTVKeywordsRequest(match.params.id);
    getTVCastRequest(match.params.id);
    getTVRecommendationsRequest(match.params.id);
    getSimilarTVRequest(match.params.id);
    getTVImagesRequest(match.params.id);
  }

  componentDidUpdate() {
    const {
      getTVDetailsRequest,
      match
    } = this.props;

    getTVDetailsRequest(match.params.id);
  }

  render() {
    const {
      popularPersons,
      tvDetails,
      tvKeywords,
      TVCast,
      tvRecommendations,
      similarTV,
      tvImages
    } = this.props;

    return (
      <TVDetails
        popularPersons={popularPersons}
        tvDetails={tvDetails}
        tvKeywords={tvKeywords}
        TVCast={TVCast}
        tvRecommendations={tvRecommendations}
        similarTV={similarTV}
        tvImages={tvImages}
        {...this.props}
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
    tvImages: state.tv.tvImages
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
    getTVImagesRequest
  }),
  withRouter
)(TVDetailsContainer);