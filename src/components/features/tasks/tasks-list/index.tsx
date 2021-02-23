import React from 'react';
import {Filter, Task} from "../index";
import {TaskItem} from "../task-item";
import './styles.scss';

type TaskList = {
    tasks: Task[];
    filter: Filter;
    onStatusToggle?: (id: number) => void;
    onRemove?: (id: number) => void;
}

export const TasksList:React.FC<TaskList> = (
    {
        tasks,
        filter,
        onStatusToggle,
        onRemove
    }) => {

    if(tasks.length === 0){
        return <p className="tasks tasks__empty">There are no tasks yet</p>
    }

    let tasksList:Task[] = [];

    switch (filter){
        case Filter.completed:
            tasksList = tasks.filter(task => task.completedStatus === true);
            break;
        case Filter.active:
            tasksList = tasks.filter(task => task.completedStatus === false);
            break;
        default:
            tasksList = tasks;
            break
    }

    return (
        <div className="tasks">
            <div className="tasks__inner grid__list">
                {
                    tasksList.map(task => {
                        return(
                            <TaskItem key={task.id} task={task} onStatusToggle={onStatusToggle} onRemove={onRemove}/>
                        )
                    })
                }
            </div>
        </div>
    );
};