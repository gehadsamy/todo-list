import './App.css';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100 app-container">
        <h1 className="mb-6 text-4xl font-bold text-gray-700 app-title">Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App;
