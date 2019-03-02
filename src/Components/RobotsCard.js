import React, { Component } from 'react';
import {Link} from 'react-router-dom';


const RobotsCard = (props) => {
	const {name,id,email} = props
	return (


	<div className='dt fixed-s fl w-20 pa-2 ma-3 tc'>
<img src={`https://robohash.org/${id}`} alt="robots"/>
  
    <h5 >{name}</h5>
    <p>{email}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
</div>


  )
}

export default RobotsCard;


// {`https://robohash.org/${id}?20x20`}