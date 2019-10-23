import React, { useEffect, useState } from 'react';
import * as i from 'types';

import { getPlayers, getGames } from 'services/firebase';

import { LeaderHeader, ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid } from './styled';

console.log('getPlayers', getPlayers);

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<i.Player[]>([]);
  const [games, setGames] = useState<i.Game[]>([]);

  useEffect(() => {
    getPlayers.then((p) => setPlayers(p));
    getGames.then((g) => setGames(g));
  }, []);

  return (
    <LeaderboardContainer>
      <LeaderHeader />
      <LeaderGrid>
        <TopPlayers players={players} />
        <ListPlayers players={players} />
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
