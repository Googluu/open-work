import { useEffect, useState } from 'react';
import axios from 'axios';

import TaskList from './components/Tasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = () => {
    const uri = `http://localhost:3000/tasks`;
    axios
      .get(uri)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
