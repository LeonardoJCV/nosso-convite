import styled from 'styled-components';

export const CountdownWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.medium};
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacings.medium};
  min-width: 100px;
  backdrop-filter: blur(5px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 70px;
    padding: ${({ theme }) => theme.spacings.small};
  }
`;

export const TimeValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const TimeLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;