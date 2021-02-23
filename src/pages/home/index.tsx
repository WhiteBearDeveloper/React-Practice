import React from 'react';
import {DefaultTemplate} from "../../templates/default";
import { Tasks } from "../../components/features/tasks";

export const HomePage = () => {

    return (
        <DefaultTemplate>
            <Tasks />
        </DefaultTemplate>
    );
};