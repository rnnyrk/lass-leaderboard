import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import donkeykong from 'images/chars/donkeykong.png';
import samus from 'images/chars/samus.png';
import jigglypuff from 'images/chars/jigglypuff.png';
import corrin from 'images/chars/corrin.png';

import {
  LeaderboardContainer, LeaderTop, LeaderTopContent, LeaderTopItem, LeaderGrid,
  LeaderList, LeaderListItem, LeaderHeader, LeaderTopImg,
} from './styled';

const Leaderboard: React.FC<LeaderboardProps> = () => {
  return (
    <LeaderboardContainer>
      <LeaderHeader>
        <div>
          <h3>Leaderboard</h3>
          <h1>Top 4</h1>
        </div>
        <div>
          <h1>Ranking</h1>
        </div>
      </LeaderHeader>

      <LeaderGrid>
        <LeaderTop>
          <LeaderTopItem>
            <LeaderTopImg src={donkeykong} />
            <LeaderTopContent>
              <div>
                <h2>Nosso</h2> <h2>22</h2>
              </div>
              <div>
                <span>Donkey Kong</span> <span>1th place</span>
              </div>
            </LeaderTopContent>
          </LeaderTopItem>
          <LeaderTopItem>
            <LeaderTopImg src={samus} />
            <LeaderTopContent>
              <div>
                <h2>Fish</h2> <h2>19</h2>
              </div>
              <div>
                <span>Samus</span> <span>2nd place</span>
              </div>
            </LeaderTopContent>
          </LeaderTopItem>
          <LeaderTopItem>
            <LeaderTopImg src={jigglypuff} />
            <LeaderTopContent>
              <div>
                <h2>Jap</h2> <h2>17</h2>
              </div>
              <div>
                <span>Jigglypuff</span> <span>3th place</span>
              </div>
            </LeaderTopContent>
          </LeaderTopItem>
          <LeaderTopItem>
            <LeaderTopImg src={corrin} />
            <LeaderTopContent>
              <div>
                <h2>Yanya</h2> <h2>16</h2>
              </div>
              <div>
                <span>Corrin</span> <span>4th place</span>
              </div>
            </LeaderTopContent>
          </LeaderTopItem>
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
