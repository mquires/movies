import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';
import { NavLink } from 'react-router-dom';

import PageComponent from '../../../components/page-components/page-component';

import usersIcon from '../../../../assets/icons/user-circle.svg';
import feedbackIcon from '../../../../assets/icons/feedback.svg';
import reportIcon from '../../../../assets/icons/report.svg';
import supportIcon from '../../../../assets/icons/support.svg';

import './admin-panel.scss';
import Icon from '../../../components/icon';

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
              <Icon
                className="admin-panel__nav-item-icon"
                glyph={usersIcon.id}
                viewBox={usersIcon.viewBox}
              />
              Users list
            </NavLink>
            <NavLink
              to={`${ROUTES.ADMIN_PANEL}/feedback`}
              className="admin-panel__nav-item"
            >
              <Icon
                className="admin-panel__nav-item-icon"
                glyph={feedbackIcon.id}
                viewBox={feedbackIcon.viewBox}
              />
              Feedback list
            </NavLink>
            <NavLink
              to={`${ROUTES.ADMIN_PANEL}/reports`}
              className="admin-panel__nav-item"
            >
              <Icon
                className="admin-panel__nav-item-icon"
                glyph={reportIcon.id}
                viewBox={reportIcon.viewBox}
              />
              Reports
            </NavLink>
            <NavLink
              to={`${ROUTES.ADMIN_PANEL}/support-list`}
              className="admin-panel__nav-item"
            >
              <Icon
                className="admin-panel__nav-item-icon"
                glyph={supportIcon.id}
                viewBox={supportIcon.viewBox}
              />
              Support list
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