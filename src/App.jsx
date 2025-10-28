import { useState, useRef, useEffect } from 'react';
import './main.scss';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';


const App = () => {
   const [todos, setTodos] = useState([]);
   const [completed, setCompleted] = useState(false);
   const nextId = useRef(1);
   const location = useLocation();
   const isFavorite = location.pathname === '/favorite';
   const isCompleted = location.pathname === '/completed';

   const addTask = (value) => {
      if (value) {
         const newTask = {
            id: nextId.current,
            task: value,
            completed: isCompleted,
            favorite: isFavorite,
         };
         setTodos([...todos, newTask])

         nextId.current = nextId.current + 1;
      }
   }

   const navigate = useNavigate();
   useEffect(() => {
      navigate('/')
   }, []);

   const removeTask = (id) => {
      setTodos([...todos.filter((task) => task.id !== id)])
   }

   const completedTask = (id) => {
      setTodos(todos.map(task =>
         task.id === id ? { ...task, completed: !task.completed } : task
      ));
   };

   const favoriteTask = (id) => {
      setTodos(todos.map(task =>
         task.id === id ? { ...task, favorite: !task.favorite } : task
      ))
   }

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
               <TodoForm addTask={addTask} todos={todos} />
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