import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../../image';
import Item from '../item';

import './actor-item.scss';

const ActorItem = (props) => {
  const {
    className,
    ...restProps
  } = props;

  return (
    <Item
      className={classNames("actor-item", className)}
      {...restProps}
    >
      <Image
        className="actor-item__image"
        {...restProps}
      />
      <p className="actor-item__category">artist</p>
    </Item>
  );
};

export default ActorItem;