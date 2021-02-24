import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import { NavLink } from 'react-router-dom';

import PageComponent from '../../../components/page-components/page-component';

import './admin-panel.scss';

const AdminPanel = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <PageComponent
      title="Admin panel"
      className={classNames("admin-panel", className)}
    >
      <div className="admin-panel__container">
        <div className="admin-panel__nav">
          <ul className="admin-panel__nav-list">
            <NavLink
              to={ROUTES.ADMIN_PANEL}
              className="admin-panel__nav-item"
            >
              Users list
            </NavLink>
            <NavLink
              to={`${ROUTES.ADMIN_PANEL}/feedback`}
              className="admin-panel__nav-item"
            >
              Feedback list
            </NavLink>
            <NavLink
              to={`${ROUTES.ADMIN_PANEL}/reports`}
              className="admin-panel__nav-item"
            >
              Reports
            </NavLink>
          </ul>
        </div>
        <div className="admin-panel__content">
          {children}
        </div>
      </div>
    </PageComponent>
  );
};

export default AdminPanel;