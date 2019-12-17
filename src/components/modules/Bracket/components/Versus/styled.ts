import styled from 'styled-components';

import VsBlue from 'images/vs-blue.png';
import VsPink from 'images/vs-pink.png';

export const VersusImage = styled.div`
  width: 160px;
  height: 123px;
  background-image: url(${VsBlue});
`;

export const VersusContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  &:nth-child(even) {
    justify-content: flex-end;

    ${VersusImage} {
      background-image: url(${VsPink});
    }
  }
`;
