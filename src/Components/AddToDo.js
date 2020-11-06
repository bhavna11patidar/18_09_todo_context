import React, {useState, useContext} from 'react'
import {addToDos} from './Service';
import {ToDoConsumer} from './ToDoContext';

export default function AddToDo() {
    const [formData, setFormData]=useState({userId:"", title:"", completed:""});
    const [todos, setTodos]=useContext(ToDoConsumer);
    const onHandleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
     const AddToDoList=()=>{
         //console.log(formData);
         addToDos(formData).then(res=>{
             //console.log(res);
             setTodos({type:"ADD_TODOS",payload:res})
         }).catch(err=>{
             console.log(err);
         })
     }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 card py-5">
                    <div className="form-group">
                        <label>User ID:</label>
                        <input type="text" name="userId" placeholder="Enter UserId" className="form-control" onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Enter Title" className="form-control" onChange={onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Completed:</label>
                        <input type="radio" name="completed" className="form-control-check" value="true" onChange={onHandleChange}/>True
                        <input type="radio" name="completed" className="form-control-check" value="false" onChange={onHandleChange}/>False
                    </div>
                    <button className="btn btn-primary" onClick={AddToDoList}>Add TODO</button>
                </div>
            </div>
        </div>
    )
}
