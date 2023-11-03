import React from 'react'
import { useState } from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = (props) => {
    const [task, setTasks] = useState([
        {id: 1, name: "Record Lectures", completed: false},
        {id: 4556, name: "Edit Records", completed: true},
        {id: 5689, name: "Watch Lectures", completed: true}
      ]);
    
      const [show, setShow] = useState(true);
    
      function handleDelete(id){
        setTasks(task.filter(task => id !== task.id));
      }
  return (
    <section className ='tasklist'>
      <ul>
        <div className='header'>
          <h1>Task List</h1>
          <button className='trigger' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        { show &&
          task.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
          )) }
      </ul>
    </section>
  )
}
