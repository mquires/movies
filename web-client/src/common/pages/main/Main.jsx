import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import PageComponent from '../../components/page-components/page-component';
import Logo from '../../components/logo';
import Button from '../../components/buttons/main-button';
import Icon from '../../components/icon';
import Image from '../../components/image';

import rightArrow from '../../../assets/icons/right-arrow.svg';
import mainWindow from '../../../assets/images/main.jpg';

import './main.scss';

const Main = () => {
  return (
    <PageComponent
      className="main"
      title="Main"
    >
      <div className="main__info-container">
        <div className="main__info">
          <Logo className="main__logo" />
          <h3 className="main__title">Discover new movies every day.</h3>
          <p className="main__text">Get movies and TV shows. You can watch as much as you want, whenever you want.</p>
          <NavLink className="main__try-it-free" to={ROUTES.LOGIN}>
            <Button caption="Try it free" />
          </NavLink>
          <NavLink to={"#"} className="main__learn-more">
            Learn more
        <Icon glyph={rightArrow.id} viewBox={rightArrow.viewBox} />
          </NavLink>
        </div>
        <div>
          <Image className="main__image" src={mainWindow} alt="Main window" />
        </div>
      </div>
    </PageComponent>
  );
};

export default Main;