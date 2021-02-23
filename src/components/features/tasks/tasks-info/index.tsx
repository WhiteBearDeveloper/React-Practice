import React from 'react';
import './styles.scss'

type TaskInfo = {
    quantity: number;
}

export const TasksInfo: React.FC<TaskInfo> = (
    {
        quantity
    }) => {
    return (
        <div className="tasks-info">
            <div className="grid__container">Tasks: {quantity}</div>
        </div>
    );
};