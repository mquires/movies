import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './footer.scss';

const Footer = (props) => {
  const {
    className
  } = props;

  return (
    <footer className={classNames("footer", className)}>
      <p className="footer__copyright">Copyright &copy; 2021. All rights reserved.</p>
      <ul className="footer__nav">
        <li className="footer__nav-item">
          <NavLink className="footer__nav-link" to="#">Support</NavLink>
        </li>
        <li className="footer__nav-item">
          <NavLink className="footer__nav-link" to={ROUTES.FEEDBACK}>Feedback</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;