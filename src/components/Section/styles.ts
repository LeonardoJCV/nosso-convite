import styled from 'styled-components';
import BackgroundImage from '../../assets/texture-background.jpeg';

type SectionProps = {
    alternate?: boolean;
};

export const Section = styled.section<SectionProps>`
  padding: ${({ theme }) => theme.spacings.large} 0;
  width: 100%;
  
  ${({ theme, alternate }) =>
        alternate
            ? `
        background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(245, 214, 238, 0.85)), url(${BackgroundImage});
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
      `
            : `
        background-color: transparent;
      `
    }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: calc(${({ theme }) => theme.spacings.large} * 0.75) 0;
    
    ${({ alternate }) => alternate && `background-attachment: scroll;`}
  }
`;