import React from 'react';
import { StyledContainer } from './styles';

type Props = {
    children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;