import React from 'react';
import * as i from 'types';

import data from './data.json';

import { LeaderHeader, ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid } from './styled';

const topPlayers: i.Player[] = [data.leaderboard[0], data.leaderboard[1], data.leaderboard[2], data.leaderboard[3]];
const listPlayers: i.Player[] = [data.leaderboard[4], data.leaderboard[5], data.leaderboard[6], data.leaderboard[7], data.leaderboard[8], data.leaderboard[9]];

const Leaderboard: React.FC = () => {
  return (
    <LeaderboardContainer>
      <LeaderHeader />
      <LeaderGrid>
        <TopPlayers players={topPlayers} />
        <ListPlayers players={listPlayers} />
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
