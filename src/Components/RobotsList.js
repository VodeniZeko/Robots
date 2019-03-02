import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RobotsCard from "./RobotsCard";
import {robots} from '../robots';





const RobotsList = ({robots}) => {
	const shuffle = robots.map((user,i )=> {
  	return <RobotsCard id={robots[i].id} name={robots[i].name} email={robots[i].email}/>

  	})
  return (
    <div>
    	{shuffle}
    </div>
  )
}

export default RobotsList;

