import style from "./Task.module.css";
import { Trash } from "phosphor-react";

export interface TaskProps {
    id: string;
    content: string;
    isCompleted: boolean;
    onChangeTaskIsCompleted: (id: string, isCompleted: boolean) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({ id, content, isCompleted, onChangeTaskIsCompleted, onDeleteTask }: TaskProps) {

    function handleOnChangeIsCompleted() {
        onChangeTaskIsCompleted(id, !isCompleted);
    }

    function onDeleteTaskClicked() {
        onDeleteTask(id);
    }

    return (
        <div className={style.task}>
            <label className={style.isCompleted}>
                <input type="checkbox" 
                    onChange={handleOnChangeIsCompleted} 
                    checked={isCompleted}
                />
                <span></span>
            </label>
            <p className={isCompleted? style.completedContent : '' }>{content}</p>
            <button title="Excluir tarefa"
                onClick={onDeleteTaskClicked}
            >
                <Trash size={24} />    
            </button>
        </div>
    )
}