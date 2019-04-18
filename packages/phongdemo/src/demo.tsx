import React from 'react';

interface CardProps {
    Name: string
}

export const Card: React.FC<CardProps> =
    ({ Name }) => (
        <div className="card">
            <div className="title">{Name}</div>
            <div className="body">{Name}</div>
        </div>
    )