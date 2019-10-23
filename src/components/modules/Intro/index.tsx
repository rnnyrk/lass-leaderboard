import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import LogoSrc from 'images/logo.png';
import { IntroContainer, LogoImg } from './styled';

const Intro: React.FC<IntroProps> = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/leaderboard');
    }, 3000);
  }, [history]);

  return (
    <IntroContainer>
      <LogoImg src={LogoSrc} alt="Logo LASS" />
    </IntroContainer>
  );
};

type IntroProps = RouteComponentProps;

export default withRouter(Intro);
