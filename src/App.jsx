import React from 'react'
import './App.css'
import ZustandDemo from './zustand'
import MobxDemo from './mobx'
import 'antd/dist/antd.css'

function App () {

	return (
		<div className="App" style={{padding:'20px'}}>
			<ZustandDemo/>
			<div style={{margin: '30px'}}/>
			<MobxDemo/>
		</div>
	)
}

export default App
