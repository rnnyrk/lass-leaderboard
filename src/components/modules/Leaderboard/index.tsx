import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as i from 'types';

import { getGames } from 'ducks/games';
import { getPlayers } from 'ducks/players';
import BgImg from 'images/bg.png?external';
import BGVideo from 'images/bg.mp4';

import { LeaderHeader, ListPlayers, TopPlayers } from './components';
import { LeaderboardContainer, LeaderGrid, VideoBg } from './styled';

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
        let combinedPlayer: i.PlayerData = {
          ...player,
          losses: [],
          wins: [],
        };

        games.forEach((game) => {
          if (player.name === game.player1 || player.name === game.player2) {
            const playedAgainst: string = player.name !== game.player1 ? game.player1 : game.player2;

            const losses: string[] = combinedPlayer.losses;
            const wins: string[] = combinedPlayer.wins;

            if (player.name === game.outcome) {
              wins.push(playedAgainst);
            } else {
              losses.push(playedAgainst);
            }

            combinedPlayer = {
              ...combinedPlayer,
              losses,
              wins,
            };
          }
        });

        return combinedPlayer;
      });

      matched.sort((a: i.PlayerData, b: i.PlayerData) => {
        return b.wins.length - a.wins.length;
      });

      setLeaderboard(matched);
    }
  }, [games, players]);

  return (
    <LeaderboardContainer>
      <LeaderHeader />
      <LeaderGrid>
        <TopPlayers leaderboard={leaderboard} allPlayers={players} />
        <ListPlayers leaderboard={leaderboard} allPlayers={players} />
      </LeaderGrid>

      <VideoBg loop playsInline muted autoPlay poster={BgImg}>
        <source src={BGVideo} type="video/mp4" />
      </VideoBg>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
