import { useState } from "react"
import "./AddTask.css"

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue("");
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            //id: String(Date.now() * Math.random()), //Not human readable
            //id: Math.floor(Math.random() * 100000), //human readable
            id: Math.floor(Math.random() * Date.now()), //human readable and more random
            name: taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }
  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            type="text" 
            name="task"
            id="task" 
            placeholder="Enter a task name"
            autoComplete="off"
            value={taskValue}
            />
            <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                <option value="false">Pending</option>
                <option value="true">Completed</option>
            </select>
            <button type="submit">Add Task</button>
            <span onClick={handleReset} className="reset">Reset</span>
        </form>
        <p>{taskValue.length}</p>
    </section>
  )
}
