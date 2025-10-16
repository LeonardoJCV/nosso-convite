import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: ${({ theme }) => theme.spacings.large};
  background-color: #c67da2ff;
  text-align: center;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
  margin: 0;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;