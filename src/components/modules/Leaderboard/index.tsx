import React from 'react';

import donkeykong from 'images/chars/donkeykong.png';
import samus from 'images/chars/samus.png';
import jigglypuff from 'images/chars/jigglypuff.png';
import corrin from 'images/chars/corrin.png';
import ness from 'images/chars/ness.png';
import pokemontrainer from 'images/chars/pokemontrainer.png';
import mewtwo from 'images/chars/mewtwo.png';
import palutena from 'images/chars/palutena.png';
import simon from 'images/chars/simon.png';
import ike from 'images/chars/ike.png';

import {
  LeaderboardContainer, LeaderTop, LeaderTopContent, LeaderTopItem, LeaderGrid,
  LeaderList, LeaderListItem, LeaderHeader, LeaderTopImg, LeaderListItemContent,
  LeaderListItemImg,
} from './styled';

const Leaderboard: React.FC = () => {
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
