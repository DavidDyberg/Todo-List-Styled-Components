import { Todo } from '../../utils/types';
import * as Styles from './Todo-list.styles'
import { FC, useEffect, useState } from "react"

export const TodoList: FC = () => {
    const [list, setList] = useState<Todo[]>([]);
    const [taskName, setTaskName] = useState<string>('');

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("todoList") || "[]");
        setList(storedList);
      }, []);
    
      
      useEffect(() => {
        if (list.length === 0) return;
        localStorage.setItem("todoList", JSON.stringify(list));
      }, [list]);

    function handleSubmit(ev:React.FormEvent) {
        ev.preventDefault();
        setTaskName(taskName) 
    }

    const addTodo = (todo: string) => {
        const newTodo: Todo = {
            id: Math.random(),
            todo: todo,
        }

        setList([...list, newTodo]);

        setTaskName('');
    }

    const deleteTodo = (id: number) => {
        const newList = list.filter((todo) => todo.id !== id)

        setList(newList)
    }

    return (
            <div>
                <Styles.TodoList>
                    <Styles.Form>
                <form onSubmit={handleSubmit}>
                    <input type='text' 
                    value={taskName} 
                    onChange={(e) => setTaskName(e.target.value)} 
                    placeholder="Your next task"/>
                    
                </form>
                <button className='add-button' onClick={() => addTodo(taskName)}>Add</button>
                </Styles.Form>
                
                <Styles.Tasks>
                <div>
                    {list.map((todo) => (
                        <div className='item' key={todo.id}>
                            <p className='todo-text'>
                                {todo.todo}
                            </p>
                            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
                        </div>
                    ))}
                </div>
                </Styles.Tasks>
                </Styles.TodoList>
            </div>
    )
}
