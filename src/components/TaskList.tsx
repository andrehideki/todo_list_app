import { Notepad } from "phosphor-react";
import { useState } from "react";
import { TodoTask } from "../App";
import { Task } from "./Task";
import style from "./TaskList.module.css";


export interface TaskListProps {
    tasks: TodoTask[];
    onChangeTaskIsCompleted: (id: string, isCompleted: boolean) => void;
    onDeleteTask: (id: string) => void;
}


export function TaskList({ tasks, onChangeTaskIsCompleted, onDeleteTask } : TaskListProps) {

    const numberOfCreatedTasks = tasks.length;
    const numberOfCompletedTasks = tasks.filter(task => task.isCompleted).length;
    const thereAreCreatedTasks = numberOfCreatedTasks > 0;

    return (
        <div className={style.taskList}>
            <header className={style.header}>
                <div>Tarefas criadas <span>{numberOfCreatedTasks}</span></div>
                <div>Concluídas <span>{numberOfCompletedTasks}</span></div>
            </header>
            <main className={style.listContent}>
                { thereAreCreatedTasks? (
                    tasks.map(task => (
                        <Task 
                            id={task.id}
                            content={task.content}  
                            isCompleted={task.isCompleted}
                            onChangeTaskIsCompleted={onChangeTaskIsCompleted}
                            onDeleteTask={onDeleteTask}
                        />
                    ))
                    ) : (
                        <>
                        <Notepad size={56} />
                            <p><b>Você ainda não tem tarfas cadastradas</b></p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </>
                    ) 
                }
            </main>
        </div>
    );
}