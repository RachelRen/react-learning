import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
 
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'

import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
//import { Route } from 'react-router'
import { Router } from 'react-router'
import { renderRoutes } from 'react-router-config';

import Hello from 'Page/static'
import PureDome from 'Page/pureComponent'
import Normal from 'Page/normal'

import ImmutableDemo from 'Page/immutable'

import Hot from 'Page/hotModule'

import ContextIndex from 'Page/context';

import Card from 'Page/child';
import ReactKey from 'Page/reactkey';








if(module.hot){
	module.hot.accept();
}

var test = `<div>rere</div>
    	<div>card child</div>`
ReactDOM.render(
	<div>
    <Hello />
    <h3>hot</h3>
    <Hot />
    <PureDome />
    <Normal />
    <ImmutableDemo />
    <ContextIndex />
    <ReactKey />
    <Card>
    	{test}
    </Card>
  </div>
	
, document.getElementById('component'))