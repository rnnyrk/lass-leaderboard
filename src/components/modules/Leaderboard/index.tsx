import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as i from 'types';

import { getGames } from 'ducks/games';
import { getPlayers } from 'ducks/players';
import PageHeader from 'common/PageHeader';

import { ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid } from './styled';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<i.PlayerData[]>([]);
  const dispatch = useDispatch();
  const games = useSelector((state: i.ReduxState) => state.games.data);
  const players = useSelector((state: i.ReduxState) => state.players.data);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getPlayers());
  }, [dispatch]);

  useEffect(() => {
    if (games && players) {
      const matched = players.map((player: i.PlayerData) => {
        let combinedPlayer: i.PlayerData = {
          ...player,
          losses: [],
          wins: [],
          score: 0,
        };

        games.forEach((game) => {
          if (player.name === game.player1 || player.name === game.player2) {
            const playedAgainst: string = player.name !== game.player1 ? game.player1 : game.player2;

            const losses: string[] = combinedPlayer.losses;
            const wins: string[] = combinedPlayer.wins;
            let score = combinedPlayer.score;

            if (player.name === game.outcome) {
              wins.push(playedAgainst);
              score++;
            } else {
              losses.push(playedAgainst);
            }

            combinedPlayer = {
              ...combinedPlayer,
              losses,
              wins,
              score,
            };
          }
        });

        return combinedPlayer;
      });

      matched.sort((a: i.PlayerData, b: i.PlayerData) => {
        if (b.score === a.score) {
          if (b.wins.includes(a.name)) {
            b.score++;
          } else {
            a.score++;
          }
        }

        return b.score - a.score;
      });

      setLeaderboard(matched);
    }
  }, [games, players]);

  return (
    <LeaderboardContainer>
      <PageHeader title="Top 4" subtitle="Leaderboard" secondTitle="Ranking" />
      <LeaderGrid>
        <TopPlayers leaderboard={leaderboard} allPlayers={players} />
        <ListPlayers leaderboard={leaderboard} allPlayers={players} />
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
