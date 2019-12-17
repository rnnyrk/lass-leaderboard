import React from 'react';

import PageHeader from 'common/PageHeader';

import { BracketPlayer, Versus, Finals } from './components';
import { BracketContainer, BracketGrid, FinalsWrapper } from './styled';

const Bracket: React.FC = () => {
  return (
    <BracketContainer>
      <PageHeader title="Semifinals" subtitle="Matches" />

      <FinalsWrapper>
        <Finals />
        <BracketGrid>
          <BracketPlayer variant="blue" />
          <BracketPlayer variant="pink" />

          <Versus />
          <Versus />

          <BracketPlayer variant="blue" />
          <BracketPlayer variant="pink" />
        </BracketGrid>
      </FinalsWrapper>
    </BracketContainer>
  );
};

export default Bracket;
