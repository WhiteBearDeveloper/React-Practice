import React from 'react';
import './styles.scss';
import {FilterItem, Filter} from "../index";

type FilterTask = {
    filters: FilterItem[],
    selectedFilter: Filter,
}

export const FilterTasks: React.FC<FilterTask> = (
    {
        filters,
        selectedFilter
    }) => {
    return (
        <div className="filters">
            {
                filters.map((filter, index) => {
                    return (
                        <div key={index} className={`filter__item filter__item-${filter.name} ${filter.type === selectedFilter ? 'filter__item-checked' : ''}`} onClick={filter.onClick}>{filter.title}</div>
                    );
                })
            }
        </div>
    );
};