import React from 'react';
import './main.scss';

export const MainBlock: React.FC = (
    {
        children
    }) => {
    return (
        <main className="main">
            {children}
        </main>
    );
};