
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
        <span>{item + 1}.&nbsp; {task.task} {`${task.description ? '-' : ''}`} {task.description}</span>
      </div>
      <div className="buttons-todo-wrapper">
        <button onClick={handleCompletedTodo}>
          <svg className={`button-basket-icon ${task.completed ? 'basket-icon' : ''}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        </button>
        {!isCompleted &&
          <button className="button-star" onClick={handleFavoriteTodo}>
            <svg className={`button-star-icon ${task.favorite ? 'favorite-icon' : ''}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
            </svg>
          </button>
        }

        <button className="button button-remove" onClick={() => removeTask(task.id)}><span>Удалить</span></button>
      </div>
    </div>
  );
}

export default TodoItem;