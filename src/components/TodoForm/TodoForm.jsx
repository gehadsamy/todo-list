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
      className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg form-container"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <input
            {...register("task", { required: true })}
            placeholder="Enter a task"
            className="flex-grow p-2 border-2 border-gray-300 rounded task-input focus:border-blue-500 focus:outline-none" 
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 font-bold text-white transform bg-blue-500 rounded submit-button hover:bg-blue-700 focus:outline-none focus:shadow-outline motion-reduce:transform-none"
          >
            Add Task
          </motion.button>
        </div>
        {errors.task && <span className="text-red-500">*This field is required</span>}
      </form>
    </motion.div>
  );
};
