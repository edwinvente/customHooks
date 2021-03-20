import React from 'react';
import ReactDOM from 'react-dom';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithHook } from './components/01-useState/CounterWithHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { SimpleForm } from './components/useEffect/SimpleForm';
//import { SimpleFormWithHook } from './components/useEffect/SimpleFormWithHook';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import { TodoApp } from './components/08-reducers/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
import './global.css';
//import './components/08-reducers/intro-reducer';

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);