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
    UserId,
    report,
    createdAt
  } = props;

  return (
    <article className={classNames("report-item", className)}>
      <div className="report-item__icon-text">
        <Icon glyph={userIcon.id} viewBox={userIcon.viewBox} />
        {name}
      </div>
      <h3>Report user:</h3>
      <p>id: {UserId}</p>
      <h3>Report:</h3>
      <p>{report}</p>
      <h3>Created at:</h3>
      <p>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>
    </article>
  );
};

export default ReportItem;