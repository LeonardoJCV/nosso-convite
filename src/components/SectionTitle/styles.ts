import styled from 'styled-components';

export const SectionTitle = styled.h2`
  display: inline-block;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.fonts.headings};
  
  text-align: center;
  margin: 0 auto ${({ theme }) => theme.spacings.large};
  display: block;
  max-width: fit-content;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::after {
    content: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
    padding: 8px 24px;
  }
`;