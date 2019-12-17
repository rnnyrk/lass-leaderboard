import React from 'react';

import StarIcon from 'vectors/star.svg';
import WinIcon from 'vectors/win.svg';

import { MenuContainer, MenuItem, MenuSvg } from './styled';

const Menu = () => (
  <MenuContainer>
    <MenuItem to="/leaderboard" activeStyle={{ opacity: 1 }}>
      <MenuSvg>
        <WinIcon />
      </MenuSvg>
      <span>Leaderboard</span>
    </MenuItem>

    <MenuItem to="/bracket" activeStyle={{ opacity: 1 }}>
      <MenuSvg>
        <StarIcon />
      </MenuSvg>
      <span>Finals</span>
    </MenuItem>
  </MenuContainer>
);

export default Menu;
