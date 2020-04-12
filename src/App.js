import React from 'react';
import CardList from './cardlist.js';
import { robots } from './robots';
import SearchBox from './searchbox';
import './app.css';
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	onsearchchange = (event) => {
		this.setState({ searchfield: event.target.value})
	}
	render(){ 
		const filteredrobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className="tc">
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onsearchchange}/>
				<CardList robots={filteredrobots} />
			</div>
		)
	}
}

export default App;