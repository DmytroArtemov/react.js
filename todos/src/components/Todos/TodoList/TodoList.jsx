import React, {useState, useEffect} from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import service from "../../../services/todos";

import './TodoList.scss';

const TodoList = ({createdTodo}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await service.get();
            setTodos(response.slice(0,10));
        })();
    }, []);

    useEffect(() => {
        createdTodo && setTodos(prevState => [...prevState, createdTodo]);
    }, [createdTodo])

    const itemDelete = async id => {
        try {
            await service.delete(id);
            setTodos(prevState => prevState.filter(item => item.id !== id));
        } catch(error) {
            console.log(error);
        }
    }
    
    const itemComplete = async item => {
        let response = await service.put(item.id, {status: !item.status});
        
        setTodos(prevState => prevState.map(el => {
            if(el.id === response.id) el = response;
            return el;
        }))
    }

    return todos.length ? (
        <ul className="todo-list">
            {todos.map((item) => (
                <TodoListItem 
                    key={item.id}
                    item={item} 
                    itemDelete={itemDelete} 
                    itemComplete={itemComplete} 
                />
            ))}
        </ul> 
    ) : null;
}

export default TodoList