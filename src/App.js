import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

export default function App() {


  return (
    <div className='App'>
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </div>
  )
}