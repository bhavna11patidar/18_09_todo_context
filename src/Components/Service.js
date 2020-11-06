import axios from 'axios';
  export const getToDos=()=>{
   return axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response)=>{
       if(response.status==200){
           return response.data;
       }
        
    }).catch(err=>{
        console.log(err);
    })
}

export const addToDos=(data)=>{
    return axios.post("https://jsonplaceholder.typicode.com/todos",data)
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        console.log(err);
    })
}

export const deleteToDos=(id)=>{
    return axios.delete("https://jsonplaceholder.typicode.com/todos/id")
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        console.log(err);
    })
}
