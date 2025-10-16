import React from 'react';
import { Section } from '../../components/Section/styles';
import { SectionTitle } from '../../components/SectionTitle/styles';
import Container from '../../components/Container';
import { EventInfoGrid, InfoBlock, MapWrapper } from './styles';

const EventInfo = () => {
    return (
        <Section alternate>
            <Container>
                <SectionTitle>Localização</SectionTitle>
                <EventInfoGrid>
                    <InfoBlock>
                        <h3>Cerimónia e Recepção</h3>
                        <p>
                            <strong>Data:</strong> Sábado, 3 de Janeiro de 2026
                        </p>
                        <p>
                            <strong>Horário:</strong> 17:00
                        </p>
                        <p>
                            <strong>Local:</strong> Chácara Esperança
                        </p>
                        <p>
                            Estrada da Ribeira, 635, Colombo, Paraná,
                            <br />
                            CEP 83408-424
                        </p>
                    </InfoBlock>
                    <MapWrapper>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9822662555794!2d-49.14910302461471!3d-25.304799877641912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce9643e3d81f3%3A0x993646ed1e0b97b3!2zQ2jDoWNhcmEgRXNwZXJhbsOnYQ!5e0!3m2!1spt-BR!2sbr!4v1760530585989!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </MapWrapper>
                </EventInfoGrid>
            </Container>
        </Section>
    );
};

export default EventInfo;