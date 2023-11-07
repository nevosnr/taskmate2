import React from 'react'
import { useState } from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = ({tasks, setTasks}) => {    
      const [show, setShow] = useState(true);
    
      function handleDelete(id){
        setTasks(tasks.filter(task => id !== task.id));
      }
  return (
    <section className ='tasklist'>
      <ul>
        <div className='header'>
          <h1>Task List</h1>
          <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        { show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
          )) }
      </ul>
    </section>
  )
}
