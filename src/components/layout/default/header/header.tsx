import React from 'react';
import './header.scss';

interface Header{
    title: string;
}

export const HeaderBlock: React.FC<Header> = (
    {
        title
    }) => {
    return (
        <header className="header">
            <div className="grid__container">
                <h1 className="h1">{title}</h1>
            </div>
        </header>
    );
};