import styled, { css } from 'styled-components';

import WinSvg from 'vectors/win.svg';

export const TooltipContent = styled.div`
  display: flex;
  width: 215px;
  padding: 20px;
`;

export const TooltipPart = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

export const TooltipItem = styled.span<TooltipItemProps>`
  display: flex;
  font-family: ${({ theme }) => theme.font.primary};
  text-transform: uppercase;

  ${(props) => props.upcoming && css`
    color: ${({ theme }) => theme.colors.gray};
  `}
`;

type TooltipItemProps = {
  upcoming?: boolean;
};

export const TooltipTitle = styled(TooltipItem)`
  display: block;
  font-size: 1.2em;
`;

export const WinIcon = styled(WinSvg)`
  width: 11px;
  height: 11px;
  margin: 1px 0 0 3px;
`;
