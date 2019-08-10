import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Performance from 'Page/renderPerformance';


ReactDOM.render(
	<Performance />
	
, document.getElementById('component'))