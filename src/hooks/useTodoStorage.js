import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStorage = create(
  persist((set, get) => ({
    todos: [],
    nextId: 1,

    addTask: (name, description, isFavorite, isCompleted) => {
      const newId = get().nextId;

      // ----------------- Создание нового дела -----------------
      const newTask = {
        id: newId,
        task: name.trim(),
        description: description, 
        completed: isCompleted,
        favorite: isFavorite,
      };

      // ----------------- Добавляем его в массив, сохраняем в store -----------------
      set((state) => ({
        todos: [...state.todos, newTask],
        nextId: state.nextId + 1,
      }));
    },

    // ----------------- Удалить -----------------
    removeTask: (id) => set((state) => ({
      todos: state.todos.filter(task => task.id !== id),
    })),

    // ----------------- Обьявить задачу как "Выполненную" -----------------
    completedTask: (id) => set((state) => ({
      todos: state.todos.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

    // ----------------- Обьявить задачу как "Избранное" -----------------
    favoriteTask: (id) => set((state) => ({
      todos: state.todos.map(task =>
        task.id === id ? { ...task, favorite: !task.favorite } : task
      ),
    })),
  }),
  )
);