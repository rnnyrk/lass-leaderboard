import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as i from 'types';

import getCharacterImage from 'services/getCharacterImage';

import {
  HomePlayerContainer, HomePlayerContent, HomePlayerItem, CharacterImage, ContentItem,
} from './styled';

const HomePlayer: React.FC<HomePlayerProps> = ({ variant }) => {
  return (
    <HomePlayerContainer>
      <HomePlayerItem variant={variant}>
        <CharacterImage src={getCharacterImage('Donkey Kong')} />
        <HomePlayerContent>
          <ContentItem>
            <h2>Nosso</h2>
          </ContentItem>
          <ContentItem>
            <span>Donkey Kong</span>
          </ContentItem>
        </HomePlayerContent>
      </HomePlayerItem>
    </HomePlayerContainer>
  );
};

export type VariantProps = 'purple' | 'pink';

type HomePlayerProps = {
  variant: VariantProps;
}

export default HomePlayer;
