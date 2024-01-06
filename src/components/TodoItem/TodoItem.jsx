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

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
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
      className={`todo-item ${todo.completed ? 'completed' : ''}`} 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={handleToggle}
          className="checkbox" 
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="edit-input" 
            onBlur={handleSave}
          />
        ) : (
          <span
            className={`task-text ${todo.completed ? 'line-through' : ''}`} 
            onDoubleClick={handleEdit}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <motion.button
            onClick={handleSave}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="save-button" 
          >
            <FaRegSave />

          </motion.button>
        ) : (
          <motion.button
            onClick={handleEdit}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="edit-button" 
          >
            <CiEdit />

          </motion.button>
        )}
        <motion.button
          onClick={handleDelete}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="delete-button" 
        >
          <i className="ri-delete-back-line"></i>
          <MdDeleteSweep />
        </motion.button>
      </div>
    </motion.div>
  );
};
