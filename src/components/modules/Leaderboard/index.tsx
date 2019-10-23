import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { LeaderboardContainer } from './styled';

const Leaderboard: React.FC<LeaderboardProps> = () => {


  return (
    <LeaderboardContainer />
  );
};

type LeaderboardProps = RouteComponentProps;

export default withRouter(Leaderboard);
