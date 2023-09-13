import React, { useState } from 'react';
import {
  FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton, EmailShareButton, TumblrShareButton, TumblrIcon, TelegramShareButton, TelegramIcon, VKShareButton, VKIcon, PinterestShareButton, PinterestIcon,
  EmailIcon, FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon, RedditShareButton, RedditIcon, ViberShareButton, ViberIcon, PocketShareButton, PocketIcon,
} from 'react-share';
import youtube1 from './images/youtube1.png';
import kakao from './images/kakao.png';
import blogger from './images/blogger.png';
import TITOK from './images/TITOK.png';
import shareicone from './images/shareicone.png';

export default function ShareButton() {
  const shareUrl = 'https://wefelix.onrender.com/';
  const title = 'check out this webpage';

  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShareClick = () => {
    setShowShareMenu(!showShareMenu);
  };

  const handleCloseClick = () => {
    setShowShareMenu(false);
  };
  const handleYouTubeShare = () => {
    const youtubeShareUrl = `https://www.youtube.com/share?url=${shareUrl}`;
    window.open(youtubeShareUrl, '_blank');
  };
  const handleKakao = () => {
    const kakaoTalkShareUrl = `https://sharer.kakao.com/talk/friends/picker/link?u=${shareUrl}`;
    window.open(kakaoTalkShareUrl);
  };
  const handleBlogger = () => {
    const bloggerShareUrl = `https://www.blogger.com/blog-this.g?u=${shareUrl}&n=${title}`;
    window.open(bloggerShareUrl);
  };
  const handleTikTokShare = () => {
    const tiktokUrl = 'https://www.tiktok.com/tag/your_challenge_or_hashtag';
    window.open(tiktokUrl, '_blank');
  };

  return (
    /* eslint-disable */
    <div className="share-container">
      <span
        className="icon"
        onClick={() => handleShareClick()}
        role="button"
        tabIndex={0}
      >
        <img
          className="share-social-icone"
          src={shareicone}
          size="2x"
          style={{
            color: '#1a2d4c', backgroundColor: 'lightgray', borderRadius: '50%', padding: '8px',
          }}
        />
      </span>
      {showShareMenu && (
        <div className="popup">
          <div className="container-icone">
            <span
              className="popup-close-icon"
              onClick={() => handleCloseClick()}
              role="button"
              tabIndex={0}
            >
              &#x2716;
            </span>
          </div>
          <div className="sharepopup-content">
            <div className="social-media">
              <div className="section-1">
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
              <div className="section-1">
                <EmailShareButton url={shareUrl} quote={title}>
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <RedditShareButton url={shareUrl} quote={title}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TumblrShareButton url={shareUrl} quote={title}>
                  <TumblrIcon size={32} round />
                </TumblrShareButton>

                <TelegramShareButton url={shareUrl} quote={title}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>
              <div className="section-1">
                <VKShareButton url={shareUrl} quote={title}>
                  <VKIcon size={32} round />
                </VKShareButton>
                <PinterestShareButton url={shareUrl} quote={title}>
                  <PinterestIcon size={32} round />
                </PinterestShareButton>
                <span onClick={handleYouTubeShare}>
                  <img className="circular-image" src={youtube1} />
                </span>
                <span onClick={handleKakao}>
                  <img className="circular-image" src={kakao} />
                </span>
              </div>

              <div className="section-1">
                <span onClick={handleBlogger}>
                  <img className="circular-image" src={blogger} />
                </span>
                <span onClick={handleTikTokShare}>
                  <img className="circular-image" src={TITOK} />
                </span>
                <ViberShareButton url={shareUrl} quote={title}>
                  <ViberIcon size={32} round />
                </ViberShareButton>
                <PocketShareButton url={shareUrl} quote={title}>
                  <PocketIcon size={32} round />
                </PocketShareButton>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
