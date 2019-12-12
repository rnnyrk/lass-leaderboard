import React from 'react';

import BgImg from 'images/bg.png?external';
import BGVideo from 'images/bg.mp4';

import { VideoContainer } from './styled';

const VideoBg: React.FC = () => {
  return (
    <VideoContainer loop playsInline muted autoPlay poster={BgImg}>
      <source src={BGVideo} type="video/mp4" />
    </VideoContainer>
  );
};

export default VideoBg;
