import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PageComponentNoTitle = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <section className={classNames('page-component', className)}>
      <div className="page-component__content">
        {children}
      </div>
    </section>
  );
};

PageComponentNoTitle.propTypes = {
  className: PropTypes.string
}

PageComponentNoTitle.defaultProps = {
  className: undefined
}

export default PageComponentNoTitle;