import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './item.scss';

const Item = (props) => {
  const {
    className,
    title,
    children
  } = props;

  return (
    <article className={classNames("item", className)}>
      {children}
      <h4 className="item__title">{title}</h4>
    </article>
  );
};

export default Item;