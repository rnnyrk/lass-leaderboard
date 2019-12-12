import styled from 'styled-components';

export const PageHeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  height: 110px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderSubtitle = styled.h3`
  margin-bottom: 10px;
`;

export const HeaderPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
