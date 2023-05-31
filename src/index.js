import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import './assets/common.css';
import App from './components/App.js';
import TodoLoader from './components/loader/loader.js'
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<TodoLoader></TodoLoader>}>
			<App />
		</Suspense>
	</React.StrictMode>
);

reportWebVitals();
