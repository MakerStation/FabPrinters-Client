import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

//metodo per fare un update allo store (chiamando il reducer e eventualmente modificando lo stato)
//parametro: action
store.dispatch(addTodoAction)
/*
configureStore richiede un oggetto {reducer: {
 categoria: nomeReducerObject,
 ...
}} [la sezione "categoria" dello stato (state.categoria) sarà gestita dal reducer nameReducerObject]
al posto di un oggetto reducer si può passare un oggetto slice (insieme di reducers (per azioni diverse))
*/

//slice creation (file separato)
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  //lista con tutti i reducers diversi e le azioni sullo stato
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
//le azioni che vengono gestite da questo slice sono di tipo counter/increment|decrement|incrementByAmount
//nomeSlice/nomeReducerContenuto
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
//I reducer non possono contenere codice asincrono (timer, ...)/cambi diretti allo stato (eccezione per createReducer and createSlice)

//es. funzione per codice asincrono (timer)
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
store.dispatch(incrementAsync(10))

//actions
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

//action creator
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}

//reducer
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

//selector (selezionare rapidamente un valore dallo state)
const selectCount = state => state.counter.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2

//https://redux.js.org/img/tutorials/essentials/ReduxDataFlowDiagram.gif




//REACT PART
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount) //estrarre dati dallo state (con selector) il selector può anche essere scritto come parametro
  const dispatch = useDispatch() //accesso al dispatcher redux
  const [incrementAmount, setIncrementAmount] = useState('2')// stato locale (non-redux)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())} //update state redux
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())} //update state redux
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}


//index.js
...
import store from './src/store/store.js'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}> //passa lo store vero e proprio a react
    <App />
  </Provider>,
  document.getElementById('root')
)
