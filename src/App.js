import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import "./App.css";
import Navbar from "./Components/Navbar";
import RobotsList from "./Components/RobotsList";
import Searchbar from "./Components/Searchbar";
import Scroll from "./Components/Scroll";
import Footer from "./Components/Footer";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ""
		};
	}

	changeIt = event => {
		this.state.robots.filter(robots => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		this.setState({ searchfield: event.target.value });
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({ robots: users });
			});
	}

	render() {
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1>loading</h1>;
		} else {
			return (
				<div>
					<Navbar />
					<Searchbar searching={this.changeIt} />
					<Scroll>
						<RobotsList robots={filterRobots} />
					</Scroll>
					<Footer />
				</div>
			);
		}
	}
}
