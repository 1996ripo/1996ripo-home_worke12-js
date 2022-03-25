import { useState, useReducer, useEffect } from 'react';
import './App.css';


function App() {

  const [value, setValue] = useState();
  const initialState = { todey: [], tommorow: [] };

  function reducer(state, action) {
    switch (action.type) {
      case 'today':
        return { todey: ['test'] };
      case 'tomorrow':
        return { tommorow: [...initialState.tommorow, value] };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div>
      <form onClick={(e) => {
        e.preventDefault();
      }}>
        <input type={'search'} placeholder='Add your to do for todey / tomorrow' onBlur={(e) => { setValue(e.target.value) }}></input>
        <button type={'submit'} onClick={() => dispatch({ type: 'today' })}>today</button>
        <button onClick={() => dispatch({ type: 'tomorrow' })}>tomorrow</button>
      </form>
      <div className='d-flex'>
        <ul>
          <h3>To Do List For TODAY</h3>
          {initialState.todey.map((element, index) => {
            return <li key={index} >{element}</li>
          })}
        </ul>
        <ul>
          <h3>To Do List For TOMORROW</h3>
          {initialState.tommorow.map((element, index) => {
            return <li key={index} >{element}</li>
          })}
        </ul>
      </div>
    </div>
  )

}

export default App;
