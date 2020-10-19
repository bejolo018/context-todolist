import React from 'react';
import TaskList from './Components/TaskList'
import TaskListContextProvider from './Context/TaskListContext'
import TaskForm from './Components/TaskForm'
import Header from './Components/Header';

function App() {
  return (
    <TaskListContextProvider>
      <div className="App">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskListContextProvider>

  );
}

export default App;
