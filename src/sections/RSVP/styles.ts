import styled from 'styled-components';
import { StyledInput } from '../../components/forms/Input/styles';

export const RSVPWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.large};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  label {
    margin-left: ${({ theme }) => theme.spacings.small};
    cursor: pointer;
  }
  
  input[type="checkbox"] {
    cursor: pointer;
  }
`;

export const StyledTextarea = styled(StyledInput).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 100px;
`;