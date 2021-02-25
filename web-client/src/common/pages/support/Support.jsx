import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../constants/routes';
import classNames from 'classnames';

import Image from '../../components/image';
import LinkButton from '../../components/buttons/link-button';
import Footer from '../../components/footer';
import SupportPopup from '../../components/popups/support-popup';

import supportCover from '../../../assets/images/support.jpg';
import learnApp from '../../../assets/images/support_1.png';
import watchTrailers from '../../../assets/images/support_2.png';
import question from '../../../assets/images/support_3.png';
import report from '../../../assets/images/support_4.png';

import './support.scss';

const Support = (props) => {
  const {
    className,
    onSubmit
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <section className={classNames("support", className)}>
      <div className="support__cover-container">
        <Image
          className="support__cover"
          src={supportCover}
          alt="Support"
        />
        <h2 className="support__title">Movies Support</h2>
      </div>
      <div className="support__container">
        <div className="support__section">
          <div className="support__section-text">
            <h3 className="support__section-title">Learn about the Movies App</h3>
            <p className="support__section-paragraph">With this application, you've got some information about thousands of movies, serials, actors and more.</p>
            <LinkButton className="support__section-link" navLink={ROUTES.MAIN}>Read about the app</LinkButton>
          </div>
          <Image
            className="support__section-image"
            src={learnApp}
            alt="Movies app"
          />
        </div>
        <div className="support__section">
          <Image
            className="support__section-image"
            src={watchTrailers}
            alt="Movies app"
          />
          <div className="support__section-text">
            <h3 className="support__section-title">Watch trailers</h3>
            <p className="support__section-paragraph">Play trailers of new movies and serials and share with friends.</p>
          </div>
        </div>
        <div className="support__row-sections">
          <div className="support__column-section">
            <Image
              className="support__section-image"
              src={question}
              alt="Movies app"
            />
            <div className="support__section-text">
              <h3 className="support__section-title">Have a question?</h3>
              <p className="support__section-paragraph">Ask everyone. Our Apple Support Community can help you find answers.</p>
              <LinkButton
                onClick={toggleMenu}
                className="support__section-link"
                navLink="#"
              >
                Support
                </LinkButton>
              {
                isOpen &&
                <SupportPopup
                  open={toggleMenu}
                  onRequestClose={closeMenu}
                  onSubmit={onSubmit}
                />
              }
            </div>
          </div>
          <div className="support__column-section">
            <Image
              className="support__section-image"
              src={report}
              alt="Movies app"
            />
            <div className="support__section-text">
              <h3 className="support__section-title">Found any bugs?</h3>
              <p className="support__section-paragraph">Write about that. You can help us.</p>
              <LinkButton className="support__section-link" navLink={ROUTES.FEEDBACK}>Feedback</LinkButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Support;