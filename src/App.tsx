import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { MainWrapper } from './styles/AppStyles'; // Importe o wrapper

// Importe todas as suas seções
import Header from './sections/Header';
import OurStory from './sections/OurStory';
import EventInfo from './sections/EventInfo';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';
import InvitationSplash from './sections/InvitationSplash'; // Vamos criar esta agora

function App() {
  // O nosso "interruptor" mágico
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  // Função que será chamada pelo componente do convite para "abrir" o site
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {/* O convite de abertura. Ele só será realmente visível no início. */}
      {/* Passamos a função para ele poder nos avisar quando for clicado */}
      <InvitationSplash isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

      {/* Todo o nosso site agora está dentro do MainWrapper */}
      {/* Ele só se tornará visível quando isInvitationOpen for true */}
      <MainWrapper isVisible={isInvitationOpen}>
        <Header />
        <OurStory />
        <EventInfo />
        <RSVP />
        <Footer />
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;