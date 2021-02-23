import React, {FormEvent, useRef} from 'react';
import './styles.scss';

type AddTask = {
    onAdd: (name: string) => void;
}

export const AddTask: React.FC<AddTask> = (
    {
        onAdd
    }) => {

    const titleRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const value = titleRef.current!.value;
        if(value !== ""){
            onAdd(value);
            titleRef.current!.value = '';
        }
    }

    return (
        <form className="add-task" onSubmit={submitHandler}>
            <div className="form__row">
                <div className="form__item">
                    <input ref={titleRef} type="text" name="add-task" placeholder="Add new task" className="add-task__input form__text form__inputtext"/>
                </div>
            </div>
        </form>
    );
}