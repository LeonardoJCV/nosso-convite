import React from 'react';
import {
    SplashWrapper,
    Envelope,
    EnvelopeBack,
    Card,
    EnvelopeFlap,
    Seal,
} from './styles';

type Props = {
    isOpen: boolean;
    onOpen: () => void;
};

const InvitationSplash: React.FC<Props> = ({ isOpen, onOpen }) => {
    return (
        <SplashWrapper isOpen={isOpen}>
            <Envelope isOpen={isOpen}>
                <EnvelopeBack />

                <Card isOpen={isOpen}>
                    <h2>Um convite especial</h2>
                    <p>para uma celebração inesquecível</p>
                </Card>

                <EnvelopeFlap isOpen={isOpen} />

                <Seal onClick={onOpen} />
            </Envelope>
        </SplashWrapper>
    );
};

export default InvitationSplash;