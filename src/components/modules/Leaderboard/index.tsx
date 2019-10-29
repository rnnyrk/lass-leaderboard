import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as i from 'types';

import { getGames } from 'ducks/games';
import { getPlayers } from 'ducks/players';

import { LeaderHeader, ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid } from './styled';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<i.PlayerData[]>([]);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.data);
  const players = useSelector((state) => state.players.data);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getPlayers());
  }, [dispatch]);

  useEffect(() => {
    if (games && players) {
      const matched = players.map((player: i.PlayerData) => {
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

      matched.sort((a: i.PlayerData, b: i.PlayerData) => {
        return b.wins - a.wins;
      });

      setLeaderboard(matched);
    }
  }, [games, players]);

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
