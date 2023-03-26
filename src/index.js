import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				value: state.value + 1
			}
		case 'DEC':
			return {
				...state,
				value: state.value - 1
			}
		case 'RND':
			return {
				...state,
				value: state.value * action.payload
			}
		default:
			return state
	}

}

const store = legacy_createStore(reducer)

const update = () => {
	document.getElementById('counter').textContent = store.getState().value 
}

store.subscribe(update)

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (value) => ({type: 'RND', payload: value})


document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc())
})

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec())
})

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10)
	store.dispatch(rnd(value))
})



// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})





// let state = reducer(initialState, {type: 'INC'})
// console.log(state);
// state = reducer(state, {type: 'INC'})
// console.log(state);
// state = reducer(state, {type: 'INC'})
// console.log(state);
// state = reducer(state, {type: 'INC'})
// console.log(state);

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		// <React.StrictMode>
		<></>
		// </React.StrictMode>
 	);

// ReactDOM.render(
//   <React.StrictMode>
//     <>
    
//     </>
//   </React.StrictMode>,
//   document.getElementById('root')
// );