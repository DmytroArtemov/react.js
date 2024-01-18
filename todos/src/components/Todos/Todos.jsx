import { useState } from "react"
import TodoList from "./TodoList/TodoList"
import TodosForm from "./TodosForm/TodosForm"
import './Todos.scss'

const Todos = () => {
    const [createdTodo, setCreatedTodo] = useState(null);

    return (
        <div className="todos">
            <TodosForm setCreatedTodo={setCreatedTodo} />
            <TodoList createdTodo={createdTodo} />
        </div>
    )
}

export default Todos