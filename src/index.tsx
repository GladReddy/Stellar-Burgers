import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundary from './components/errors/ErrorBoundary';
import App from './components/app/App';

import './styles/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
<React.StrictMode>
	<Provider store={store}>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Provider>
</React.StrictMode>
);
