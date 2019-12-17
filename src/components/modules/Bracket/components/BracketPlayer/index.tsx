import React from 'react';

import getCharacterImage from 'services/getCharacterImage';

import {
  BracketPlayerContainer, BracketPlayerContent, BracketPlayerItem, CharacterImage, ContentItem,
} from './styled';

const BracketPlayer: React.FC<BracketPlayerProps> = ({ variant }) => {
  return (
    <BracketPlayerContainer>
      <BracketPlayerItem variant={variant}>
        <CharacterImage src={getCharacterImage('Donkey Kong')} />
        <BracketPlayerContent>
          <ContentItem>
            <h2>Nosso</h2>
          </ContentItem>
          <ContentItem>
            <span>Donkey Kong</span>
          </ContentItem>
        </BracketPlayerContent>
      </BracketPlayerItem>
    </BracketPlayerContainer>
  );
};

export type VariantProps = 'blue' | 'pink';

type BracketPlayerProps = {
  variant: VariantProps;
}

export default BracketPlayer;
