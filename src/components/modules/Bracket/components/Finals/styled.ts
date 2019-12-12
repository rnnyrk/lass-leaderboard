import styled from 'styled-components';

export const FinalsPlayer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const FinalsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 10px;
  justify-content: center;
  width: 800px;
  height: 176px;
  margin-top: 200px;
`;
