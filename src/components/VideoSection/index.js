import React from 'react';
import { useLocation } from 'react-router-dom';
import { BigPlayButton } from 'video-react';

import {
  Container,
  VideoContainer,
  Exit,
  Row,
  VideoPlayer,
} from './VideoElements';

const Video = () => {
  const location = useLocation();
  const { mp4 } = location.state;

  return (
    <Container>
      <Row>
        <Exit to='/'>x</Exit>
      </Row>
      <VideoContainer>
        <VideoPlayer autoPlay muted src={mp4}>
          <BigPlayButton position='center' />
        </VideoPlayer>
      </VideoContainer>
    </Container>
  );
};

export default Video;
