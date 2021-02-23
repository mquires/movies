import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import Image from '../image';

import noBackground from '../../../assets/images/no-background.png';

import './detail-item-background.scss';
import Icon from '../icon';

import playIcon from '../../../assets/icons/play-button.svg';
import closeIcon from '../../../assets/icons/close.svg';
import Preloader from '../preloader';
import ErrorMessage from '../error-message/ErrorMessage';

const DetailItemBackground = (props) => {
  const {
    className,
    backgroundImage,
    title,
    video
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("detail-item__background", className)}>
      {
        isOpen ?
          <>
            {
              video ?
              <ReactPlayer className="detail-item__background-image"
                playing
                width="100%"
                url={`https://www.youtube.com/watch?v=${video.key}`}
              /> :
              <ErrorMessage message="Video is unavailable" className="detail-item__background-image" />
            }
            <Icon
              className="detail-item__close-button"
              onClick={() => setIsOpen(false)}
              glyph={closeIcon.id}
              viewBox={closeIcon.viewBox}
            />
          </> :
          <>
            <div className="detail-item__background-container">
              <Icon
                className="detail-item__play-button"
                onClick={() => setIsOpen(true)}
                glyph={playIcon.id}
                viewBox={playIcon.viewBox}
              />
              <Image
                className="detail-item__background-image"
                src={`http://image.tmdb.org/t/p/w1280${backgroundImage}`}
                alt="Background"
                onError={(e) => e.target.src = noBackground}
              />
            </div>
            <h2 className="detail-item__title">{title}</h2>
          </>
      }
    </div>
  );
};

export default DetailItemBackground;