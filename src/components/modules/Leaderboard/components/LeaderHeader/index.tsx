import React from 'react';

import { LeaderHeaderContainer, HeaderSubtitle, HeaderPart } from './styled';

const LeaderHeader: React.FC = () => (
  <LeaderHeaderContainer>
    <HeaderPart>
      <HeaderSubtitle>Leaderboard</HeaderSubtitle>
      <h1>Top 4</h1>
    </HeaderPart>
    <HeaderPart>
      <h1>Ranking</h1>
    </HeaderPart>
  </LeaderHeaderContainer>
);

export default LeaderHeader;
