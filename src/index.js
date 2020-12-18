import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import City from './components/City/City';
import 'semantic-ui-css/semantic.min.css';
import './index.less';

const store = createStore(rootReducer);

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path='/city'>
					<City />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
