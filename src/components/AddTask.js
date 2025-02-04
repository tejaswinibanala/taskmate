

const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id){
      const date = new Date();
      const updatedTask = tasklist.map((todo) => (
        todo.id === task.id?  {name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo
      ));
      setTasklist(updatedTask);
      setTask({});
    }
    else{
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask])
      setTask({});
    }
    
  }
  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Add new Task'
        name='task'
        value={task.name || ''}
        onChange={(e) => setTask({...task, name: e.target.value})}
        autoComplete='off'
        ></input>
        <button type='submit'>{task.id? "Update": "Add"}</button>
      </form>
    </section>
  )
}

export default AddTask