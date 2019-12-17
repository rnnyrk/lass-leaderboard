import styled from 'styled-components';

import { BracketPlayerContainer } from './components/BracketPlayer/styled';

export const BracketContainer = styled.div`
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 60px;
  overflow: hidden;
`;

export const BracketGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 182px 176px 182px;
  grid-gap: 80px;
  width: 100%;
  height: 100%;

  ${BracketPlayerContainer} {
    &:before {
      content: '';
      position: absolute;
      left: 80px;
      bottom: -90px;
      width: 5px;
      height: 90px;
      background-color: ${({ theme }) => theme.colors.blue};
    }

    &:nth-child(2) {
      &:before {
        left: auto;
        right: 80px;
        background-color: ${({ theme }) => theme.colors.pink};
      }
    }

    &:nth-child(5) {
      &:before {
        left: 80px;
        bottom: auto;
        top: -90px;
        height: 125px;
      }
    }

    &:nth-child(6) {
      &:before {
        right: 80px;
        left: auto;
        bottom: auto;
        top: -90px;
        height: 125px;
        background-color: ${({ theme }) => theme.colors.pink};
      }
    }
  }
`;

export const FinalsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
