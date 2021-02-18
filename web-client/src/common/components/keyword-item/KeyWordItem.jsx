import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './keyword-item.scss';

const KeyWordItem = (props) => {
  const {
    className,
    caption
  } = props;

  return (
    <li className={classNames("keyword-item", className)}>
      {caption}
    </li>
  );
};

export default KeyWordItem;