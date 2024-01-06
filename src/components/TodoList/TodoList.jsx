import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      className="w-full max-w-2xl p-4 mx-auto mt-5 bg-white rounded-lg shadow-lg todo-list-container"
    >
      <div className="flex justify-between w-full mb-4">
        <label htmlFor="filter" className="text-gray-700">Filter Tasks: </label>
        <select 
          id="filter" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 ml-2 border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      
      {filteredTodos.length === 0 ? (
        <p className="text-gray-600 no-tasks">No tasks match this filter!</p>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </motion.div>
  );
};
