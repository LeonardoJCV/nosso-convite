import styled from 'styled-components';
import paperTexture from '../../assets/papel-antigo.jpg';
import waxSeal from '../../assets/selo-lacre.png';

export const SplashWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5c38fff;
  
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'none' : 'auto')};
  transition: opacity 1s 0.8s ease;
`;

export const Envelope = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 400px;
  height: 275px;
  transition: transform 0.8s 0.5s ease;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1.5)' : 'scale(1)')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 320px;
    height: 220px;
  }
`;

export const EnvelopeBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #c7bca1;
  background-image: url(${paperTexture});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

export const Card = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 2;
  width: 95%;
  height: 95%;
  top: 2.5%;
  left: 2.5%;
  background-color: #f3efe9;
  background-image: url(${paperTexture});
  background-size: cover;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  transform: ${({ isOpen }) => (isOpen ? 'translateY(80%)' : 'translateY(0)')};
  transition: transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  h2 {
    font-family: ${({ theme }) => theme.fonts.headings};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    font-family: ${({ theme }) => theme.fonts.main};
    margin-top: 5px;
    font-style: italic;
  }
`;

export const EnvelopeFlap = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 55%;
  top: 0;
  left: 0;
  background-color: #c7bca1;
  background-image: url(${paperTexture});
  background-size: cover;
  border-radius: 8px 8px 0 0;
  transform-origin: top;
  transition: transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)')};
`;

export const Seal = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #a62c2b;
  background-image: url(${waxSeal});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  top: 40%; 
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;