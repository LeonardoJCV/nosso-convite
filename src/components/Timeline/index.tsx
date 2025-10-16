import React from 'react';
import {
    TimelineWrapper,
    TimelineItem,
    TimelineContent,
} from './styles';

export type StoryEvent = {
    date: string;
    title: string;
    description: string;
};

type Props = {
    events: StoryEvent[];
};

const Timeline: React.FC<Props> = ({ events }) => {
    return (
        <TimelineWrapper>
            {events.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineContent>
                        <small>{event.date}</small>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </TimelineWrapper>
    );
};

export default Timeline;