import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as i from 'types';

import VideoBg from 'common/VideoBg';
import PageHeader from 'common/PageHeader';

import { BracketPlayer, Versus } from './components';
import { BracketContainer, BracketGrid } from './styled';

const Bracket: React.FC = () => {
  return (
    <BracketContainer>
      <PageHeader title="Semifinals" subtitle="Matches" />
      <BracketGrid>
        <BracketPlayer variant="purple" />
        <BracketPlayer variant="pink" />

        <Versus  />
        <Versus  />

        <BracketPlayer variant="purple" />
        <BracketPlayer variant="pink" />
      </BracketGrid>

      <VideoBg />
    </BracketContainer>
  );
};

export default Bracket;
