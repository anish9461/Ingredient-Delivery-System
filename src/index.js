import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


 //redux STORE -> globalized state


  //   //ACTION -> an increment
  // const increment = () => {
  //   return {
  //     name: 'INCREMENT'
  //   }
  // }

  // const decrement = () => {
  //   return {
  //     name: 'DECREMENT'
  //   }
  // }

  //   //REDUCER -> 
  //   const counter = (state = 0, action) =>{
  //     switch(action.type){
  //       case "INCREMENT":
  //           return state + 1;
  //       case "DECREMENT":
  //           return state - 1;
  //     }
  //   };

  //   let store = createStore(counter);

  //   //Display it on console
  //   store.subscribe(() => console.log(store.getState()))


    //DISPATCH



ReactDOM.render(
  <React.StrictMode>
    
    <App />

   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
