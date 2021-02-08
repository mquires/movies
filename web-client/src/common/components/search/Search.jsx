import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import INPUT_TYPES from '../../constants/input-types';

import Icon from '../icon';

import findIcon from '../../../assets/icons/find.svg';

import './search.scss';

const Search = (props) => {
  const {
    className
  } = props;

  return (
    <form className={classNames("search", className)}>
      <Icon
        glyph={findIcon.id}
        viewBox={findIcon.viewBox}
        className="search__icon"
      />
      <input
        className="search__input"
        type={INPUT_TYPES.TEXT}
        placeholder="Search"
      />
    </form>
  );
}

Search.propTypes = {
  className: PropTypes.string
};

Search.defaultProps = {
  className: undefined
};

export default Search;
