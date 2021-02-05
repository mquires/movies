import React from 'react';
import PropTypes from 'prop-types';

import PageComponent from '../../components/page-component';

const Main = (props) => {
  const {
    onLogin
  } = props;

  return (
    <PageComponent
      className="main"
      title="Main"
    >
      <p>hello</p>
    </PageComponent>
  );
};

export default Main;