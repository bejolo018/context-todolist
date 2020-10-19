import React from 'react';
import TaskList from './Components/TaskList'
import TaskListContextProvider from './Context/TaskListContext'

function App() {
  return (
    <TaskListContextProvider>
      <div className="App">
        <TaskList />
      </div>
    </TaskListContextProvider>

  );
}

export default App;
