import styles from "./NewTaskForm.module.css";
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

export interface NewTaskFormProps {
    onNewTaksIsSubmited: (task: string) => void;
}

export function NewTaskForm({ onNewTaksIsSubmited }: NewTaskFormProps) {

    const [newTask, setNewTask] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setNewTask("");
        onNewTaksIsSubmited(newTask);
    }

    return (
        <form className={styles.newTaskForm} onSubmit={handleSubmit}>
            <input 
                placeholder="Adicione uma nova tarefa" 
                onChange={({target}) => setNewTask(target.value)}
                value={newTask} 
            />
            <button type="submit" disabled={!newTask}>
                Criar
                <PlusCircle size={24} />
            </button>
        </form>
    );
}