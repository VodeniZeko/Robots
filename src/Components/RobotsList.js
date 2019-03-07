import React from 'react';
import RobotsCard from "./RobotsCard";









const RobotsList = ({robots}) => {
	const shuffle = robots.map((user,i )=> {
  	return <RobotsCard 
		  	key={i} 
		  	id={robots[i].id} 
		  	name={robots[i].name} 
		  	email={robots[i].email}
		  	/>

  	})
  return (
       <div className="tc pt-3">
    	{shuffle}
       </div>
       
  )
}

export default RobotsList;





