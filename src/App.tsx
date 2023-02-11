import { Navbar } from "./components/Navbar"
import "../global.css";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import { v4 as generateUUIDV4 } from "uuid";


export interface TodoTask {
  id: string,
  content: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TodoTask[]>([]);

  function onNewTaskIsSubmited(task: string) {
    setTasks([...tasks, {
      id: generateUUIDV4().toString(),
      content: task,
      isCompleted: false
    }]);
  }

  function onChangeTaskIsCompleted(id: string, isCompleted: boolean) {
    const task = tasks.find(task => task.id == id);
    if (!task) return;
    task.isCompleted = isCompleted;
    if (isCompleted) setTasks([...tasks.filter(task => task.id !== id), task])
    else setTasks([task, ...tasks.filter(task => task.id !== id)])
  }

  function onDeleteTask(id: string) {
    setTasks(tasks.filter(task => task.id != id));
  }

  return (
    <>
      <Navbar />
      <main id="container">
        <NewTaskForm onNewTaksIsSubmited={onNewTaskIsSubmited}/>
        <TaskList 
          tasks={tasks}
          onChangeTaskIsCompleted={onChangeTaskIsCompleted}
          onDeleteTask={onDeleteTask}
        />
      </main>
    </>    
  )
}

export default App
