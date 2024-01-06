import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { TodoList } from './components/TodoList/TodoList'


function App() {

  return (
    <>
<div className="app-container"> {/* Add Tailwind classes for overall styling */}
        <h1 className="app-title">Todo List</h1> {/* Tailwind classes for title */}
        <TodoForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
