import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import {ToDoProvider} from './Components/ToDoContext';
import AddToDo from './Components/AddToDo';
import ViewToDo from './Components/ViewToDo'
function App() {
  return (
    
    <Router>
      <ToDoProvider>
      <Header></Header>
      <Route exact path="/" component={ViewToDo}></Route>
      <Route exact path="/add" component={AddToDo}></Route>
      </ToDoProvider>
    </Router>
  );
}

export default App;
