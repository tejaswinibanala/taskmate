import React from 'react'

const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleEdit = (id) => {
    const editableTask = tasklist.find(todo => todo.id === id);
    setTask(editableTask);
  }

  const handleDelete = (id) => {
    const editedTasklist = tasklist.filter(todo => todo.id !== id);
    setTasklist(editedTasklist);
  }
  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>ToDo</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <span className='clearAll' onClick={() => setTasklist([])}>Clear All</span>
      </div>
      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className='name'>{todo.name}</span>
              <span className='time'>{todo.time}</span>
            </p>
            <i onClick={() => handleEdit(todo.id)} className='bi bi-pencil-square'></i>
            <i onClick={() => handleDelete(todo.id)} className='bi bi-trash'></i>
        </li>
        ))}
      </ul>

    </section>
  )
}

export default ShowTask