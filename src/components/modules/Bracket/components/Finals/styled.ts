import styled from 'styled-components';

export const FinalBracket = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    flex-direction: column;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: -0.5px;
    text-shadow: 0 0 14px rgba(255, 255, 255, .7);
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FinalsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 400px 150px 400px;
  grid-gap: 10px;
  justify-content: center;
  width: 950px;
  height: 176px;
`;
