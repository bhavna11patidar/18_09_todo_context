import React, {createContext, useState, useReducer} from 'react';

export const ToDoConsumer=createContext();
export function ToDoProvider(props) {
    const reducer=(todos, action)=>{
        //console.log(action);
        switch(action.type){
            case "VIEW_TODOS":
                return action.payload;
            case "ADD_TODOS":
                return [...todos,action.payload];
            default:
                return todos;
        }
    }


    const intialToDo=[]
    //const [movies, setMovies]=useState(intialMovies);
    const [todos, setTodos]=useReducer(reducer,intialToDo);
    return (
        <ToDoConsumer.Provider value={[todos, setTodos]}>
            {props.children}
        </ToDoConsumer.Provider>
    )
}
