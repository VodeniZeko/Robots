import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RobotsCard from "./RobotsCard";

export default class RobotsList extends Component {
	render() {
		return (
			<div>
			<RobotsCard />
			</div>
		);
	}
}

