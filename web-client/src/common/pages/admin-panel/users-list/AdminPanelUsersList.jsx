import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import FindUsersItem from '../../../components/find-users-item';
import AdminPanel from '../component';

const AdminPanelUsersList = (props) => {
  const {
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
    <AdminPanel>
      {usersList}
    </AdminPanel>
  );
};

export default AdminPanelUsersList;