import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Icon from '../icon';

import findIcon from '../../../assets/icons/find.svg';

import './search.scss';

const Search = (props) => {
  const {
    className,
    handleSubmit
  } = props;

  return (
    <form
      className={classNames("search", className)}
      onSubmit={handleSubmit}
    >
      <Icon
        glyph={findIcon.id}
        viewBox={findIcon.viewBox}
        className="search__icon"
      />
      <Field
        className="search__input"
        component="input"
        type="search"
        placeholder="Search"
        name="search"
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

export default reduxForm({ form: 'search-form' })(Search);
