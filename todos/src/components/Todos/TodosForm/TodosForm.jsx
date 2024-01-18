import { useRef, useState } from 'react';
import service from '../../../services/todos';
import Button from '../../Button/Button';

import './TodosForm.scss';

const TodosForm = ({setCreatedTodo}) => {
    const inputTitle = useRef();
    const [newTodo, setNewTodo] = useState({
        title: `Default value`,
        status: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await service.post(newTodo);
        setCreatedTodo(response);
    }

    const handleTitle = (event) => {
        setNewTodo(prevState => ({...prevState, title: event.target.value}))
    }

    const handleComplete = (event) => {
        setNewTodo(prevState => ({...prevState, status: event.target.checked}))
    }

    return <form onSubmit={handleSubmit} className='form-add'>
        <label className='title'>
            <span>Title </span>
            <input type="text" ref={inputTitle} defaultValue={newTodo.title} onChange={handleTitle} />
        </label>
        <label className='check'>
            <span>Complete</span>
            <input type="checkbox" defaultChecked={newTodo.status} onChange={handleComplete} />
        </label>
        <Button title='Add todo' className='btn-add' />
    </form>
}

export default TodosForm;