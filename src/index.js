import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Main } from './components/Main'

window.React = React

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		</Route>	
	</Router>,
	document.getElementById('main-app')
	)