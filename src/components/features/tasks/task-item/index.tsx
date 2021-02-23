import React from 'react';
import './styles.scss'
import {Task} from "../index";

type TaskItem = {
    task: Task,
    onStatusToggle?: (id:number) => void,
    onRemove?: (id:number) => void,
}

export const TaskItem: React.FC<TaskItem> = (
    {
        task,
        onStatusToggle,
        onRemove
    }) => {

    const changeStatusHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        if(onStatusToggle){
            onStatusToggle(id);
        }
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        if(onRemove){
            onRemove(id);
        }
    }

    return (
        <div className="grid__item-6x grid__item" key={task.id}>
            <div className={`${task.completedStatus ? 'task-item__finished' : ''} task-item`}>
                <div className="task-item__status" onClick={(event => changeStatusHandler(event, task.id))}/>
                <div className="task-item__title">{task.title}</div>
                <div className="task-item__remove" onClick={(event) => removeHandler(event, task.id)}/>
            </div>
        </div>
    );
}