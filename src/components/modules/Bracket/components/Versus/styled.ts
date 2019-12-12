import styled from 'styled-components';

export const VersusImage = styled.div`
  width: 150px;
  height: 123px;
  margin-left: -20%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const VersusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &:nth-child(even) {
    margin-left: auto;
    margin-right: -20%;
  }
`;
