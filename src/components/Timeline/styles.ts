import styled from 'styled-components';

export const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 6px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
  }

  small {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
    display: inline-block;
    margin-bottom: 8px;
    font-size: 0.8rem;
  }
`;

export const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
  }

  ${TimelineItem} {
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.primary};
      border: 4px solid ${({ theme }) => theme.colors.secondary};
      top: 25px;
      border-radius: 50%;
      z-index: 1;
    }

    &:nth-child(odd) {
      left: 0;
      
      &::after {
        right: -10px;
      }

      ${TimelineContent}::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: -10px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
      }
    }

    &:nth-child(even) {
      left: 50%;

      &::after {
        left: -10px;
      }
      
      ${TimelineContent}::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: -10px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &::after {
      left: 30px;
    }

    ${TimelineItem} {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
      
      &:nth-child(odd), &:nth-child(even) {
        left: 0;
      }

      &::after {
        left: 20px;
      }
      
      ${TimelineContent}::before {
        left: -10px;
        right: auto;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
      }
    }
  }
`;