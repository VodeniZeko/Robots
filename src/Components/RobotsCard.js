import React, { Component } from 'react';
import styled from 'styled-components';



const RobotsCard = (props) => {
	const {name,id,email} = props
	return (

<Card className=' bg-silver dib br4 pa2 ma3 grow tc'>      
      <img src={`https://robohash.org/test${id}?50x50`} alt="robots" />
		<div>
       <h5 >{name}</h5>
		 <p>{email}</p>
		 <a href="#" className=" btn btn-primary">Learn more </a>
	</div>
</Card>
      
  )
}

export default RobotsCard;


const Card = styled.div `
 	cursor: grab;
.btn {
	border-radius:.5em;
}
`;
