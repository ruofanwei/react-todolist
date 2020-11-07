import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoItem from './TodoItem'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider} from 'styled-components';


const theme = {
  colors:{
    yellow: '#fcbf1e',
    green: '#68b0ab',
    pink: '#ffeadb',
    orange: '#ff9a76',
    blue: '#2d6187',
  },
  fonts:{
    LG: '24px',
    MD: '18px',
    SM: '14px',
  },

}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <TodoItem/>
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
