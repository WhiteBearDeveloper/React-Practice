import React, {useState} from 'react';
import {AddTask} from "./add-task";
import {TasksList} from "./tasks-list";
import {FilterTasks} from "./filter-tasks";
import {TasksInfo} from "./tasks-info";
import './styles.scss';

export interface Task{
    id: number;
    title: string;
    completedStatus: boolean;
}

export enum Filter {
    default,
    completed,
    active
}

export interface FilterItem {
    name: string;
    title: string;
    type: Filter;
    onClick: () => void;
}

export const Tasks = () => {
    const [tasksList, setTasksList] = useState<Task[]>([]);
    const [filter, setFilter] = useState<Filter>(Filter.default);

    const showAllTasks = () => {
        setFilter(Filter.default);
    }

    const showCompletedTasks = () => {
        setFilter(Filter.completed);
    }

    const showActiveTasks = () => {
        setFilter(Filter.active);
    }

    const filters: FilterItem[] = [
        {
            name: 'default',
            title: 'All tasks',
            type: Filter.default,
            onClick: showAllTasks
        },
        {
            name: 'completed',
            title: 'Completed tasks',
            type: Filter.completed,
            onClick: showCompletedTasks
        },
        {
            name: 'active',
            title: 'Active tasks',
            type: Filter.active,
            onClick: showActiveTasks
        },
    ]

    const addTaskHandler = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title: title,
            completedStatus: false
        }
        setTasksList(prev => [newTask, ...prev]);
    }

    const onStatusToggleHandler = (id: number) => {
        setTasksList(prev => prev.map(task => {
           if(task.id === id){
                return{
                    ...task,
                    completedStatus: !task.completedStatus
                }
           }
           return task;
        }))
    }

    const removeTaskHandler = (id: number) => {
        setTasksList(prev => prev.filter(task => task.id !== id));
    }

    return(
        <>
            <div className="grid__container tasks-page">
                {
                    tasksList.length > 0 && (
                        <FilterTasks selectedFilter={filter} filters={filters}/>
                    )
                }
                <AddTask onAdd={addTaskHandler}/>
                <TasksList filter={filter} tasks={tasksList} onStatusToggle={onStatusToggleHandler} onRemove={removeTaskHandler}/>
            </div>
            {
                tasksList.length > 0 && (
                    <TasksInfo quantity={tasksList.length}/>
                )
            }
        </>
    )
}