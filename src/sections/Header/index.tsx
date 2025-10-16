import React from 'react';
import {
    HeaderWrapper,
    HeaderContent,
    Subtitle,
    MainTitle,
    WeddingDate,
} from './styles';
import Container from '../../components/Container';
import Countdown from '../../components/Countdown';

const Header = () => {
    const weddingDateText = '3 de Janeiro de 2026';
    const weddingDateISO = '2026-01-03T17:00:00';
    const groomName = 'Leonardo';
    const brideName = 'Kauane';

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Subtitle>Nós vamos nos casar!</Subtitle>
                    <MainTitle>{`${brideName} & ${groomName}`}</MainTitle>
                    <WeddingDate>{weddingDateText}</WeddingDate>
                    <Countdown targetDate={weddingDateISO} />

                </HeaderContent>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;