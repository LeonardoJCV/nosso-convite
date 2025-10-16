import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { MainWrapper } from './styles/AppStyles';

import Header from './sections/Header';
import OurStory from './sections/OurStory';
import EventInfo from './sections/EventInfo';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';
import InvitationSplash from './sections/InvitationSplash';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InvitationSplash isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />
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