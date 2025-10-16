import React, { useState, useEffect } from 'react';
import { CountdownWrapper, TimeUnit, TimeValue, TimeLabel } from './styles';

type Props = {
    targetDate: string;
};

const Countdown: React.FC<Props> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = Object.entries(timeLeft).map(([label, value]) => (
        <TimeUnit key={label}>
            <TimeValue>{String(value).padStart(2, '0')}</TimeValue>
            <TimeLabel>{label}</TimeLabel>
        </TimeUnit>
    ));

    return (
        <CountdownWrapper>
            {timerComponents.length ? timerComponents : <span>O grande dia chegou!</span>}
        </CountdownWrapper>
    );
};

export default Countdown;