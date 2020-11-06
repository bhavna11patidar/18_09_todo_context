import React, {useContext} from 'react'
import  {ToDoConsumer} from './ToDoContext';
import {getToDos} from './Service';
export default function ViewToDo() {
    const [todos, setTodos]=useContext(ToDoConsumer);
    if(todos.length==0){
      getToDos().then(res=>{
          setTodos({type:"VIEW_TODOS", payload:res});
      });
    }
    return (
        <div className="container mt-5"> 
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                {todos.map((d,i)=>(
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.userId}</td>
                        <td>{d.title}</td>
                         <td>{(d.completed).toString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
