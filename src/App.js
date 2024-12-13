import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState("")
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) ||"medium");


  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <Header setTheme={setTheme} theme={theme} />
      <AddTask 
        tasklist = {tasklist} 
        setTasklist = {setTasklist}
        task = {task}
        setTask = {setTask} />
      <ShowTask 
        tasklist = {tasklist} 
        setTasklist = {setTasklist}
        task = {task}
        setTask = {setTask}/>
    </div>
    
  );
}

export default App;
