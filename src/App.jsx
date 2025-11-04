import { useEffect } from 'react';
import './main.scss';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTodoStorage } from './hooks/useTodoStorage';


const App = () => {
  const todos = useTodoStorage((state) => state.todos);
  const addTask = useTodoStorage((state) => state.addTask);
  const removeTask = useTodoStorage((state) => state.removeTask);
  const completedTask = useTodoStorage((state) => state.completedTask);
  const favoriteTask = useTodoStorage((state) => state.favoriteTask);

  // ----------------- Геолокация -----------------
  const location = useLocation();
  const isFavorite = location.pathname === '/favorite';
  const isCompleted = location.pathname === '/completed';

  // ----------------- При перезагрузке направлять на главную -----------------
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/')
  }, []);

  // ----------------- Отображение того или иного раздела по пути -----------------
  const TodoAllDisplay = ({ filter }) => {
    let filteredTask = todos;

    if (filter === 'completed') {
      filteredTask = todos.filter(task => task.completed);
    } else if (filter === 'favorite') {
      filteredTask = todos.filter(task => task.favorite);
    }

    return (
      <div className="todo-list">
        <h1 style={{ textAlign: "center", color: 'aqua' }}>
          Всего дел &mdash; {todos.length}, Избранных &mdash; {todos.filter(task => task.favorite).length}, Завершенных &mdash; {todos.filter(task => task.completed).length}
        </h1>

        {filteredTask.map((task, index) => (
          <TodoItem
            task={task}
            key={task.id}
            removeTask={removeTask}
            item={index}
            completedTodo={completedTask}
            favoriteTodo={favoriteTask}
            isFavorite={isFavorite}
            isCompleted={isCompleted}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className='title main-title'>To-Do List</h1>
      <div className="todo-addTask">
        <nav className="nav">
          <NavLink to="/">Все дела</NavLink>
          <NavLink to="/favorite">Избранные</NavLink>
          <NavLink to="/completed">Завершенные</NavLink>
        </nav>
        {!isCompleted &&
          <TodoForm
            addTask={addTask}
            todos={todos}
            isFavorite={isFavorite}
            isCompleted={isCompleted}
          />
        }
        <Routes>
          <Route path="/" element={<TodoAllDisplay filter="all" />} />
          <Route path="/favorite" element={<TodoAllDisplay filter="favorite" />} />
          <Route path="/completed" element={<TodoAllDisplay filter="completed" />} />
        </Routes>
      </div>
    </>
  );
}
export default App;