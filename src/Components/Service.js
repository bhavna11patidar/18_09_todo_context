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
