import React from 'react';
import * as i from 'types';
import { v4 as uuid } from 'uuid';
import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import {
  TooltipContent, TooltipItem, TooltipTitle, TooltipPart,
  WinIcon, SkullIcon, StyledTippy,
} from './styled';

const Tooltip: React.FC<TooltipProps> = ({
  allPlayers, wins, losses, children, currentPlayer,
}) => {
  const upcomingPlayers = allPlayers.map((player) => {
    if (!wins.includes(player.name) && !losses.includes(player.name)) {
      return player.name;
    }

    return false;
  });

  return (
    <StyledTippy
      content={
        <TooltipContent>
          <TooltipPart>
            <TooltipTitle>Played</TooltipTitle>
            {wins.map((playerName) => (
              <TooltipItem key={uuid()}>
                {playerName} <WinIcon />
              </TooltipItem>
            ))}
            {losses.map((playerName) => (
              <TooltipItem key={uuid()}>
                {playerName} <SkullIcon />
              </TooltipItem>
            ))}
          </TooltipPart>
          <TooltipPart>
            <TooltipTitle>Upcoming</TooltipTitle>
            {upcomingPlayers.map((playerName) => {
              if (playerName && playerName !== currentPlayer) {
                return (
                  <TooltipItem key={uuid()} upcoming>
                    {playerName}
                  </TooltipItem>
                );
              }

              return null;
            })}
          </TooltipPart>
        </TooltipContent>
      }
      followCursor
      plugins={[followCursor]}
      animation="fade"
      arrow={false}
      placement="bottom-start"
    >
      {children}
    </StyledTippy>
  );
};

type TooltipProps = {
  allPlayers: i.PlayerData[];
  wins: string[];
  losses: string[];
  currentPlayer: string;
};

export default Tooltip;
