import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../../components/icon';

import nothingIcon from '../../../assets/icons/not-applicable.svg';

import './empty-list-message.scss';

const EmptyListMessage = (props) => {
  const {
    className
  } = props;

  return (
    <div className={classNames('empty-list-message', className)}>
      <Icon
        className="empty-list-message__icon"
        glyph={nothingIcon.id}
        viewBox={nothingIcon.viewBox}
      />
      <p className="empty-list-message__text">Nothing was found</p>
    </div>
  );
};

export default EmptyListMessage;