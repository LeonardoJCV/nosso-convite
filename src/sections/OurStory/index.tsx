import React from 'react';
import Container from '../../components/Container';
import Timeline, { StoryEvent } from '../../components/Timeline';
import { Section } from '../../components/Section/styles';
import { SectionTitle } from '../../components/SectionTitle/styles';

const storyData: StoryEvent[] = [
    {
        date: '8 de Fevereiro de 2025',
        title: 'Onde Tudo Começou',
        description: 'Nossos caminhos se cruzaram pela primeira vez, e uma conexão instantânea surgiu entre nós.',
    },
    {
        date: '1 de Março de 2025',
        title: 'O Primeiro "Eu Te Amo"',
        description: 'Em uma noite estrelada, as palavras que mudariam tudo foram ditas, selando nosso compromisso.',
    },
    {
        date: '3 de Maio de 2025',
        title: 'O Pedido de Casamento',
        description: 'Em meio à esperança, veio o pedido que deu início a este novo capítulo de nossas vidas.',
    },
    {
        date: '3 de Janeiro de 2026',
        title: 'O Grande Dia',
        description: 'O dia em que diremos "sim" para sempre, e mal podemos esperar para celebrar com todos vocês!',
    },
];

const OurStory = () => {
    return (
        <Section alternate>
            <Container>
                <SectionTitle>Nossa História</SectionTitle>
                <Timeline events={storyData} />
            </Container>
        </Section>
    );
};

export default OurStory;