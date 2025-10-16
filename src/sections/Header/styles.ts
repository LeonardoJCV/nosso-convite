import styled from 'styled-components';
import BackgroundImage from '../../assets/header-background.jpeg';

export const HeaderWrapper = styled.header`
  height: 100vh;
  width: 100%;
  background: url(${BackgroundImage}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Overlay preto com 40% de opacidade */
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

export const WeddingDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small} 0;
`;