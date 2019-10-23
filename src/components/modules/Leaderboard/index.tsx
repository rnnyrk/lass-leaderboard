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

        games.forEach((game: i.Game) => {
          const matched = players.map((player: i.Player) => {
            console.log('player.name', player.name, player);
            console.log('game', game);

            if (player.name === game.player1 || player.name === game.player2) {
              console.log('MATCH!');

              if (player.name === game.outcome) {
                console.log('WON!');
                return {
                  ...player,
                  games: player.games ? player.games += 1 : 1,
                  losses: player.losses || 0,
                  wins: player.wins ? player.wins += 1 : 1,
                };
              } else {
                console.log('LOST!');
                return {
                  ...player,
                  games: player.games ? player.games += 1 : 1,
                  losses: player.losses ? player.losses += 1 : 1,
                  wins: player.wins || 0,
                };
              }
            }

            return {
              ...player,
              games: player.games || 0,
              losses: player.losses || 0,
              wins: player.wins || 0,
            };
          });

          console.log('matched', matched);

          matched.sort((a: i.Player, b: i.Player) => {
            return b.wins - a.wins;
          });

          console.log('sorted', matched);

          setLeaderboard(matched);
        });
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
