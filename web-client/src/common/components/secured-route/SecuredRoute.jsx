import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';

import ROUTES from '../../constants/routes';

function SecuredRouteComponent(props) {
  const {
    children,
  } = props;

  return (
    localStorage.getItem('token')
      ? children
      : <Redirect to={ROUTES.LOGIN} />
  );
}

SecuredRouteComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const SecureRoute = withRouter(SecuredRouteComponent);

export default SecureRoute;
