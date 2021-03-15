import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ROUTES from '../../../constants/routes';

import PageComponent from '../../../components/page-components/page-component';
import NavPage from '../../../components/nav-page';
import NavPageItem from '../../../components/nav-page/nav-page-item';

import settingsIcon from '../../../../assets/icons/settings.svg';

import './settings.scss';

const Settings = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <PageComponent
      title="Settings"
      className={classNames("settings", className)}
    >
      <div className="settings__container">
        <div className="settings__nav">
          <NavPage>
            <NavPageItem
              glyph={settingsIcon.id}
              viewBox={settingsIcon.viewBox}
              navLink={ROUTES.SETTINGS}
              caption="Edit Profile"
            />
          </NavPage>
        </div>
        <div className="settings__content">
          {children}
        </div>
      </div>
    </PageComponent>
  );
};

export default Settings;