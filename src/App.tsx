import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './sections/Header';
import OurStory from './sections/OurStory';
import RSVP from './sections/RSVP';
import EventInfo from './sections/EventInfo';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <OurStory />
      <EventInfo />
      <RSVP />
      <Footer />
    </ThemeProvider>
  );
}

export default App;