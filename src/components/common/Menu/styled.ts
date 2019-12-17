import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const MenuItem = styled(NavLink)<MenuItemProps>`
  display: flex;
  align-items: center;
  width: 105px;
  margin: 0 20px;
  word-break: break-all;
  font-size: 15px;
  opacity: .5;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    opacity: 1;
  }

  ${(props) => props.active && css`
    opacity: 1;
  `};
`;

export const MenuSvg = styled.div`
  min-width: 35px;
  min-height: 35px;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

type MenuItemProps = {
  active?: boolean;
};
