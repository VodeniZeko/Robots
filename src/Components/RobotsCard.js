import React, { Component } from 'react';



const RobotsCard = (props) => {
	const {name,id,email} = props
	return (

		<div className='bg-silver dib br4 pa2 ma3 grow tc'>
	<img src={`https://robohash.org/test${id}?50x50`} alt="robots" />
		<div>
       <h5 >{name}</h5>
		 <p>{email}</p>
		 <a href="#" className=" btn btn-primary">Learn more </a>
	</div>
</div>
      
  )
}

export default RobotsCard;


