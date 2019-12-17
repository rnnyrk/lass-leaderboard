import React from 'react';

import getCharacterImage from 'services/getCharacterImage';

import {
  BracketPlayerContainer, BracketPlayerContent, BracketPlayerItem, CharacterImage, ContentItem,
} from './styled';

const BracketPlayer: React.FC<BracketPlayerProps> = ({ variant }) => {
  return (
    <BracketPlayerContainer>
      <BracketPlayerItem variant={variant}>
        {variant !== 'inactive' && (
          <CharacterImage src={getCharacterImage('Donkey Kong')} />
        )}
        <BracketPlayerContent>
          {variant !== 'inactive' && (
            <>
              <ContentItem>
                <h2>Nosso</h2>
              </ContentItem>
              <ContentItem>
                <span>Donkey Kong</span>
              </ContentItem>
            </>
          )}
        </BracketPlayerContent>
      </BracketPlayerItem>
    </BracketPlayerContainer>
  );
};

export type VariantProps = 'blue' | 'pink' | 'orange' | 'inactive';

type BracketPlayerProps = {
  variant: VariantProps;
}

export default BracketPlayer;
