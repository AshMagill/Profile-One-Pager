import React from 'react';
import { useLocation } from 'react-router-dom';
import { BigPlayButton } from 'video-react';

import { Container, VideoContainer, Exit, VideoPlayer } from './VideoElements';

const Video = () => {
  const location = useLocation();
  const { mp4 } = location.state;

  return (
    <Container>
      <Exit to='/'>return</Exit>
      <VideoContainer>
        <VideoPlayer src={mp4}>
          <BigPlayButton position='center' />
        </VideoPlayer>
      </VideoContainer>
    </Container>
  );
};

export default Video;