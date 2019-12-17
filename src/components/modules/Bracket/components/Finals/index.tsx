import React from 'react';

import WinIcon from 'vectors/win.svg';

import BracketPlayer from '../BracketPlayer';
import { FinalsContainer, FinalBracket } from './styled';

const Finals: React.FC<FinalsProps> = () => {
  return (
    <FinalsContainer>
      <FinalBracket>
        <BracketPlayer variant="inactive" />
      </FinalBracket>
      <FinalBracket>
        <WinIcon />
      </FinalBracket>
      <FinalBracket>
        <BracketPlayer variant="inactive" />
      </FinalBracket>
    </FinalsContainer>
  );
};


type FinalsProps = {}

export default Finals;
