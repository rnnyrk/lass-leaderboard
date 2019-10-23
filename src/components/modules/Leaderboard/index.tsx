import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  LeaderboardContainer, LeaderTop, LeaderTopItem, LeaderGrid,
  LeaderList, LeaderListItem,
} from './styled';

const Leaderboard: React.FC<LeaderboardProps> = () => {
  return (
    <LeaderboardContainer>
      <LeaderGrid>
        <LeaderTop>
          <LeaderTopItem>test</LeaderTopItem>
          <LeaderTopItem>test</LeaderTopItem>
          <LeaderTopItem>test</LeaderTopItem>
          <LeaderTopItem>test</LeaderTopItem>
        </LeaderTop>

        <LeaderList>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
          <LeaderListItem>test</LeaderListItem>
        </LeaderList>
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

type LeaderboardProps = RouteComponentProps;

export default withRouter(Leaderboard);
