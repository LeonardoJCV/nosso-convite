import React from 'react';
import { FooterWrapper, FooterText } from './styles';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const groomName = 'Leonardo';
    const brideName = 'Kauane';

    return (
        <FooterWrapper>
            <FooterText>
                {brideName} <span>&</span> {groomName}
            </FooterText>
            <FooterText>© {currentYear} | Feito com amor.</FooterText>
        </FooterWrapper>
    );
};

export default Footer;