import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './App.css';
import Navbar from './Components/Navbar';
import RobotsList from './Components/RobotsList';
import Default from './Components/Default';
import {robots} from './robots';
import Searchbar from './Components/Searchbar';



export default class App extends Component {
constructor() {
	super() 
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

    changeIt = (event) => {
     this.setState({searchfield:event.target.value})
    }

	render() {
	const filterRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
		return (
		<div>
		  <Navbar />
		  <Searchbar searching={this.changeIt}/>
		  <RobotsList robots={filterRobots}/>
		 </div>
		);
	}
}


