import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import Avatar from '../avatar';
import Button from '../buttons/main-button';

import './find-users-item.scss';

export default function FindUsersItem(props) {
  const {
    navLink,
    className,
    name,
    createdAt,
    ...restProps
  } = props;

  return (
    <NavLink
      to={navLink}
      className={classNames('find-users-item', className)}
    >
      <div className="find-users-item__contact">
        <Avatar
          className="find-users-item__avatar"
          {...restProps}
        />
        <div className="find-users-item__contact-info">
          <p className="find-users-item__name">{name}</p>
          <p className="find-users-item__type">User</p>
        </div>
      </div>
      <div>
        <p className="find-users-item__created">Created: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <Button
          caption="Issue admin rights"
        />
      </div>
    </NavLink>
  );
}

FindUsersItem.propTypes = {
  className: PropTypes.string,
};

FindUsersItem.defaultProps = {
  className: undefined,
};