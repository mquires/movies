import React from 'react';
import PropTypes from 'prop-types';

import PageComponent from '../../../components/page-components/page-component';

import './watch-later-page-component.scss';

const WatchLaterPageComponent = (props) => {
  const {
    children
  } = props;

  return (
    <PageComponent
      className="watch-later-page-component"
      title="Watch later"
    >
      <div className="watch-later-page-component__container">
        {children}
      </div>
    </PageComponent>
  );
};

export default WatchLaterPageComponent;