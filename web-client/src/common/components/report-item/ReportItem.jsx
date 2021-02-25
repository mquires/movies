import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

import Icon from '../../components/icon';

import userIcon from '../../../assets/icons/user.svg';

import './report-item.scss';

const ReportItem = (props) => {
  const {
    className,
    name,
    userName,
    report,
    createdAt
  } = props;

  return (
    <article className={classNames("report-item", className)}>
      <div className="report-item__icon-text">
        <Icon glyph={userIcon.id} viewBox={userIcon.viewBox} />
        {name}
      </div>
      <h3>User:</h3>
      <p>{userName}</p>
      <h3>Report:</h3>
      <p>{report}</p>
    </article>
  );
};

export default ReportItem;