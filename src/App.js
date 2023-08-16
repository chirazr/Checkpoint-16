import './App.css';
import ListTask from './Component/ListTask';
import Task from './Component/Task';

function App() {
  return (
    <div className="App">
      <h2>My list</h2>
      
      <Task />
      <ListTask/>
    </div>
  );
}

export default App;
