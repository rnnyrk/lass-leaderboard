import styled from 'styled-components';

export const VersusImage = styled.div`
  width: 150px;
  height: 123px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const VersusContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  &:nth-child(even) {
    justify-content: flex-end;
  }
`;
