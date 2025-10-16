import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Container from '../../components/Container';
import { Section } from '../../components/Section/styles';
import { SectionTitle } from '../../components/SectionTitle/styles';
import { RSVPWrapper, Form, CheckboxWrapper, StyledTextarea } from './styles';
import { InputWrapper, StyledInput } from '../../components/forms/Input/styles';
import { StyledButton } from '../../components/forms/Button/styles';

type FormInputs = {
  fullName: string;
  hasPlusOne: boolean;
  plusOneName?: string;
  dietaryRestrictions?: string;
  songRequest?: string;
};

const RSVP = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
  const hasPlusOne = watch('hasPlusOne');

  const onSubmit: SubmitHandler<FormInputs> = data => {
    const myPhoneNumber = '5541984937563';

    let message = `*✨ Confirmação de Presença! ✨*\n\n`;
    message += `*Nome:* ${data.fullName}\n\n`;
    message += `*Vai levar acompanhante?* ${data.hasPlusOne ? 'Sim' : 'Não'}\n`;
    if (data.hasPlusOne && data.plusOneName) {
      message += `*Nome do Acompanhante:* ${data.plusOneName}\n`;
    }
    if (data.dietaryRestrictions) {
      message += `\n*Restrições Alimentares:* ${data.dietaryRestrictions}\n`;
    }
    if (data.songRequest) {
      message += `\n*Sugestão de Música para a Pista:* ${data.songRequest}\n`;
    }

    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section>
      <Container>
        <SectionTitle>Confirme sua Presença</SectionTitle>
        <RSVPWrapper>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
              <StyledInput 
                placeholder="Seu nome completo"
                {...register('fullName', { required: true })}
              />
              {errors.fullName && <span style={{color: 'red'}}>Nome é obrigatório.</span>}
            </InputWrapper>

            <CheckboxWrapper>
              <input type="checkbox" id="plusOne" {...register('hasPlusOne')} />
              <label htmlFor="plusOne">Vou levar um acompanhante</label>
            </CheckboxWrapper>

            {hasPlusOne && (
              <InputWrapper>
                <StyledInput 
                  placeholder="Nome completo do acompanhante"
                  {...register('plusOneName', { required: true })}
                />
                {errors.plusOneName && <span style={{color: 'red'}}>Nome do acompanhante é obrigatório.</span>}
              </InputWrapper>
            )}

            <InputWrapper>
              <StyledTextarea
                placeholder="Você possui alguma restrição alimentar? (Opcional)"
                {...register('dietaryRestrictions')}
              />
            </InputWrapper>
            
            <InputWrapper>
              <StyledInput
                placeholder="Qual música não pode faltar na festa? (Opcional)"
                {...register('songRequest')}
              />
            </InputWrapper>

            <StyledButton type="submit">Enviar Confirmação</StyledButton>
          </Form>
        </RSVPWrapper>
      </Container>
    </Section>
  );
};

export default RSVP;