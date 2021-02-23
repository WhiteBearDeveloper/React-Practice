import React from 'react';
import {HeaderBlock} from "../../components/layout/default/header/header";
import {MainBlock} from "../../components/layout/default/main/main";

export const DefaultTemplate: React.FC = (
    {
        children
    }) => {
    return (
        <div className="page">
            <HeaderBlock title="Tasks list" />
            <MainBlock>
                {children}
            </MainBlock>
        </div>
    );
};