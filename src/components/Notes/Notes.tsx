import { ChangeEvent, useState } from 'react';

type Todo = {
  title: string;
  description: string;
};

const defaultValue = {
  title: '',
  description: ''
};

export const Notes = () => {
  const [todo, setTodo] = useState<Todo>(defaultValue);
  const [todos, setTodos] = useState<Todo[]>(() => {
    const data = localStorage.getItem('todos');

    if (!data) {
      localStorage.setItem('todos', JSON.stringify([]));
      return [];
    }

    return JSON.parse(data);
  });

  const handleAddTodo = () => {
    const newTodos = [...todos, todo];
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
    setTodo(defaultValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;

    setTodo({
      ...todo,
      [key]: value
    });
  };

  const renderTodos = () => {
    if (!todos.length) {
      return <div>No todos</div>;
    }

    return (
      todos.map(({ title, description }) => (
        <ul>
          <li>
            <h4>{title}</h4>
            <p>{description}</p>
          </li>
        </ul>
      ))
    );
  };

  return (
    <div className='row'>
      <div className='flex'>
        <input
          name='title'
          value={todo.title}
          onChange={handleChange}
          placeholder='Add todo title'
          className='input'
        />
        <button onClick={handleAddTodo}>Add to do</button>
      </div>
      <div className='flex'>
        <input
          name='description'
          value={todo.description}
          onChange={handleChange}
          placeholder='Add todo desc'
          className='input'
        />
      </div>
      {renderTodos()}
    </div>
  );
};
