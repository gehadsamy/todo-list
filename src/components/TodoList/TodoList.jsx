import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="todo-list-container" 
    >
      {todos.length === 0 ? (
        <p className="no-tasks">No tasks added yet!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </motion.div>
  );
};
