import React from 'react';

import { VersusContainer, VersusImage } from './styled';

const Versus: React.FC<VersusProps> = () => {
  return (
    <VersusContainer>
      <VersusImage />
    </VersusContainer>
  );
};


type VersusProps = {}

export default Versus;
