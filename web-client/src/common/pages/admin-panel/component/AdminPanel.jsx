import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import FindUsersItem from '../../../components/find-users-item';

import './admin-panel.scss';

const AdminPanel = (props) => {
  const {
    className,
    users
  } = props;

  const usersList = users.map((user, index) => (
    <FindUsersItem
      className="admin-panel__user-item"
      navLink={`${ROUTES.PROFILE}/${user.id}`}
      id={user.id}
      key={index}
      name={user.name}
      createdAt={user.createdAt}
    />
  ));

  return (
    <PageComponent
      title="Admin panel"
      className={classNames("admin-panel", className)}
    >
      <div className="admin-panel__container">
        <div className="admin-panel__nav">
          <ul className="admin-panel__nav-list">
            <li className="admin-panel__nav-item">Users list</li>
          </ul>
        </div>
        <div className="admin-panel__content">
          {usersList}
        </div>
      </div>
    </PageComponent>
  );
};

export default AdminPanel;