import React, { useEffect, useState } from 'react';
import * as i from 'types';

import { getPlayers, getGames } from 'services/firebase';

import { LeaderHeader, ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid } from './styled';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<i.Player[]>([]);

  useEffect(() => {
    Promise.all([getPlayers, getGames])
      .then((values) => {
        const players = values[0];
        const games = values[1];

        const matched = players.map((player: i.Player) => {
          let combinedPlayer = {
            ...player,
            games: 0,
            losses: 0,
            wins: 0,
          };

          games.forEach((game) => {
            if (player.name === game.player1 || player.name === game.player2) {
              if (player.name === game.outcome) {
                combinedPlayer = {
                  ...combinedPlayer,
                  games: combinedPlayer.games += 1,
                  losses: combinedPlayer.losses,
                  wins: combinedPlayer.wins += 1,
                };
              } else {
                combinedPlayer = {
                  ...combinedPlayer,
                  games: combinedPlayer.games += 1,
                  losses: combinedPlayer.losses += 1,
                  wins: combinedPlayer.wins,
                };
              }
            }
          });

          return combinedPlayer;
        });

        matched.sort((a: i.Player, b: i.Player) => {
          return b.wins - a.wins;
        });

        setLeaderboard(matched);
      });
  }, []);

  return (
    <LeaderboardContainer>
      <LeaderHeader />
      <LeaderGrid>
        <TopPlayers players={leaderboard} />
        <ListPlayers players={leaderboard} />
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
