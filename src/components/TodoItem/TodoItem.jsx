import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { deleteTodo, editTodo, toggleTodo } from '../../features/todos/todosSlice';
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

export const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const dispatch = useDispatch();

  // Animation variants
  const itemVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const handleDelete = () => {
    setTimeout(() => dispatch(deleteTodo(todo.id)), 500);
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo({
      id: todo.id,
      task: editedTask,
    }));
    setIsEditing(false);
  };


  return (
    <motion.div
    className={`todo-item ${todo.completed ? 'completed bg-green-100' : 'bg-gray-50'} shadow-lg rounded-lg overflow-hidden flex justify-between items-center p-4 mb-3`}
    variants={itemVariants}
    initial="initial"
    animate="initial"
    exit="exit"
  >
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={handleToggle}
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" 
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="flex-1 px-2 py-1 ml-4 border rounded edit-input focus:outline-none focus:border-blue-500" 
            onBlur={handleSave}
          />
        ) : (
          <span
            className={`task-text ml-4 ${todo.completed ? 'line-through' : ''}`} 
            onDoubleClick={handleEdit}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <motion.button
            onClick={handleSave}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-green-600 save-button hover:text-green-800"
          >
            <FaRegSave size={20} />
          </motion.button>
        ) : (
          <motion.button
            onClick={handleEdit}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-600 edit-button hover:text-blue-800"
          >
            <CiEdit size={20} />
          </motion.button>
        )}
        <motion.button
          onClick={handleDelete}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-red-600 delete-button hover:text-red-800"
        >
          <MdDeleteSweep size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
};
