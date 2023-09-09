import React from 'react';
import {
  FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton,

  FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon,
} from 'react-share';

export default function ShareButton() {
  const shareUrl = 'https://wefelix.onrender.com/';
  const title = 'check out this webpage';
  return (

    <>
      <div className="share-container">
        <h1 className="share-page">Share this webpage</h1>

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
      </div>

    </>
  );
}
