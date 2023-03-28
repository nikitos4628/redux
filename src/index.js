import React from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './components/App';

const root = createRoot(document.getElementById('root'))

const store = legacy_createStore(reducer)
	
	root.render(
		<Provider store={store}>
		<App/>
		</Provider>
 	);
