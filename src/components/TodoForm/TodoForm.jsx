import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addTodo } from '../../features/todos/todosSlice';

export const TodoForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addTodo({
      task: data.task,
      completed: false
    }));
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="form-container" 
    >
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <input
          {...register("task", { required: true })}
          placeholder="Enter a task"
          className="task-input" 
        />
        {errors.task && <span>This field is required</span>}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="submit-button" 
        >
          Add Task
        </motion.button>
      </form>
    </motion.div>
  );
};
