import React from 'react'
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { AlertCard } from './alertCard';

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
    <>
    <h1>Task List {props.title}</h1>
      <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
        { show &&
         task.map((task) => (
          <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        )) }
      </ul>
      <AlertCard result='success'>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
      </AlertCard>

      <AlertCard result='warning'>
      <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
      
      </AlertCard>

      <div className='box alert'>
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laboriosam?</p>
      </div>
      </>
  )
}
