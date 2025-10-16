import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;