import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import {
  FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton,

  FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon,
} from 'react-share';

export default function ShareButton() {
  const shareUrl = 'https://wefelix.onrender.com/';
  const title = 'check out this webpage';

  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShareClick = () => {
    setShowShareMenu(!showShareMenu);
  };
  return (

    <>
      <div className="share-container">
        <span
          className="icone"
          onClick={() => handleShareClick()}
          onKeyDown={() => {}}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={faShare}
            beat
            size="2xl"
            style={{
              color: '#1a2d4c', backgroundColor: 'lightgray', borderRadius: '50%', padding: '8px',
            }}
          />
        </span>
        {showShareMenu && (
          <div className="share-links">
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} quote={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl} quote={title}>

              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={shareUrl} quote={title}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

        )}
      </div>

    </>
  );
}
