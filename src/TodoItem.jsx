
const TodoItem = ({ task, removeTask, item, favoriteTodo, completedTodo, isCompleted }) => {
   const handleFavoriteTodo = () => {
      favoriteTodo(task.id)
   }

   const handleCompletedTodo = () => {
      completedTodo(task.id)
   }

   return (
      <div className="todo-item">
         <div className="todo-id">
            <span>{item + 1} -&nbsp;</span>
            <p className="todo-name">{task.task}</p>
         </div>
         <div className="buttons-todo-wrapper">
            <button onClick={handleCompletedTodo}>
               <svg className={`button-basket-icon ${task.completed ? 'basket-icon' : ''}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
               </svg>
            </button>
            {!isCompleted &&
               <button className="button-star" onClick={handleFavoriteTodo}>
                  <svg className={`button-star-icon ${task.favorite ? 'favorite-icon' : ''}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
               </button>
            }

            <button className="button button-remove" onClick={() => removeTask(task.id)}><span>Удалить</span></button>
         </div>
      </div>
   );
}

export default TodoItem;