import React from 'react';
import ROUTES from '../../../../constants/routes';

import WatchLaterPageComponent from '../../watch-later-page-component';
import SectionLinkItem from '../../../../components/section-link-item';

import movieIcon from '../../../../../assets/icons/movie.svg';
import tvIcon from '../../../../../assets/icons/television.svg';

const WatchLater = () => {
  return (
    <WatchLaterPageComponent>
      <SectionLinkItem
        navLink={`${ROUTES.WATCH_LATER}/movies`}
        title="Movies"
        glyph={movieIcon.id}
        viewBox={movieIcon.viewBox}
      />
      <SectionLinkItem
        navLink={`${ROUTES.WATCH_LATER}/serials`}
        title="TV"
        glyph={tvIcon.id}
        viewBox={tvIcon.viewBox}
      />
    </WatchLaterPageComponent>
  );
};

export default WatchLater;