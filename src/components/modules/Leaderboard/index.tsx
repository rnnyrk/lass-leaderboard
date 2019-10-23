import React from 'react';

import ness from 'images/chars/ness.png';
import pokemontrainer from 'images/chars/pokemontrainer.png';
import mewtwo from 'images/chars/mewtwo.png';
import palutena from 'images/chars/palutena.png';
import simon from 'images/chars/simon.png';
import ike from 'images/chars/ike.png';

import data from './data.json';

import { LeaderHeader, TopPlayers } from './components';
import {
  LeaderboardContainer, LeaderGrid,
  LeaderList, LeaderListItem, LeaderListItemContent,
  LeaderListItemImg,
} from './styled';

const Leaderboard: React.FC = () => {
  return (
    <LeaderboardContainer>
      <LeaderHeader />
      <LeaderGrid>
        <TopPlayers players={data.leaderboard} />

        <LeaderList>
          <LeaderListItem>
            <LeaderListItemImg src={ness} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
          <LeaderListItem>
            <LeaderListItemImg src={pokemontrainer} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
          <LeaderListItem>
            <LeaderListItemImg src={mewtwo} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
          <LeaderListItem>
            <LeaderListItemImg src={palutena} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
          <LeaderListItem>
            <LeaderListItemImg src={simon} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
          <LeaderListItem>
            <LeaderListItemImg src={ike} />
            <LeaderListItemContent>
              <div>
                <h4>Rix</h4>
                <span>Ness</span>
              </div>
              <div>
                <span>Score</span>
                <h4>12</h4>
              </div>
            </LeaderListItemContent>
          </LeaderListItem>
        </LeaderList>
      </LeaderGrid>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
