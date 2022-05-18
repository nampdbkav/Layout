import React, { Fragment } from 'react';

//Component
import TodoList from './components/TodoList';
import { ThemeProvider } from './components/ThemeContext'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


//Css
import './css/Todo.css'

function App() {
  return (
    <Fragment>
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </Fragment>
  );
}

export default App;