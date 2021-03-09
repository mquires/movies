import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SuccessMessage from '../../success-message';

const PageWithSuccessMessage = (props) => {
  const {
    className,
    successSending,
    children,
    ...restProps
  } = props;

  return (
    <section className={classNames("page-with-success-message", className)}>
      {
        successSending &&
        <SuccessMessage {...restProps} />
      }
      {children}
    </section>
  );
};

export default PageWithSuccessMessage;