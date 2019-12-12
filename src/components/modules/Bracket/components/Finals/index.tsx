import React from 'react';

import { FinalsContainer, FinalsPlayer } from './styled';

const Finals: React.FC<FinalsProps> = () => {
  return (
    <FinalsContainer>
      <FinalsPlayer />
      <FinalsPlayer />
      <FinalsPlayer />
    </FinalsContainer>
  );
};


type FinalsProps = {}

export default Finals;
