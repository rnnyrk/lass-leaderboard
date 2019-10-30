import React from 'react';
import * as i from 'types';
import { v4 as uuid } from 'uuid';
import Tippy from '@tippy.js/react';
import { followCursor } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import { TooltipContent, TooltipItem, TooltipTitle, TooltipPart, WinIcon } from './styled';

const Tooltip: React.FC<TooltipProps> = ({
  allPlayers, wins, losses, children,
}) => {
  const upcomingPlayers = allPlayers.map((player) => {
    if (!wins.includes(player.name) && !losses.includes(player.name)) {
      return player.name;
    }

    return false;
  });

  return (
    <Tippy
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
                {playerName}
              </TooltipItem>
            ))}
          </TooltipPart>
          <TooltipPart>
            <TooltipTitle>Upcoming</TooltipTitle>
            {upcomingPlayers.map((playerName) => {
              if (playerName) {
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
    </Tippy>
  );
};

type TooltipProps = {
  allPlayers: i.PlayerData[];
  wins: string[];
  losses: string[];
};

export default Tooltip;
