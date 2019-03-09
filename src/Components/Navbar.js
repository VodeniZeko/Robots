import React, { Component } from 'react';
import logo from '../logo.svg';
import Typing from './Typing';
import styled from 'styled-components';



export default class Navbar extends Component {
	render() {
		return (


<div className="mw9 center ph3-ns pb-5 pt-2">
  <div className="cf ph2-ns bg-silver shadow-5">
    
    <div className="fl w-30 w-third-ns pa2">
	      <div className="bg-silver pv4">
		      <img alt='logo'src={logo} />
	      </div>
    </div>
    <div className="fl w-30 w-third-ns pa2">
	      <div className=" bg-silver pv4 tc f2 measure moon-gray">
	      <Typing strings={[
	  'Beep',
	  'Boop',
      '<i>We</i>',
      'Boop',
  	  'Beep',
      '<i>Are</i>',
      'Beep',
      'Boop',
	  '<i>Friendly</i>',
      'Boop',
      'Beep',
      '<i>Robots</i>'
    ]} />
	      </div>
    </div>
    <div className="fl w-30 w-third-ns pa2">
	      <Navi className=" bg-silver pv4 tc">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
  
  <p className="tx">Lets Connect:</p><span className='SPgo ma2 h2 w2 '><a href="" className="go"> <i className="fab fa-google-plus-g"></i></a></span>
          <span className='SPg ma2 h2 w2'><a href="" className="git"> <i className="fab fa-github"></i></a></span>
          <span className='SPf ma2 h2 w2'><a href="" className="fb"> <i className="fab fa-facebook-f"></i></a></span>
          <span className='SPi ma2 h2 w2'><a href="" className="inst"> <i className="fab fa-instagram"></i></a></span>
          <span className='SPy ma2 h2 w2'><a href="" className="yt"> <i className="fab fa-youtube"></i></a></span>
          <span className='SPt ma2 h2 w2'><a href="" className="tw"> <i className="fab fa-twitter"></i></a></span>
	      </Navi>
    </div>
  
  </div>
</div>

		);
	}
}
  const Navi = styled.div`
.tx {
  color:white;
  text-shadow: .1em .1em .3em black;
}

  
 .SPg:hover a {
   color:#000000;
   transition: color .25s;
 }

  .SPf:hover a {
    color:#3b5998;
   transition: color .25s;
}
  .SPgo:hover a{
    color:#dd4b39;
   transition: color .25s;
}
  .SPi:hover a{
    color:#e95950;
   transition: color .25s;
}
  .SPy:hover a{
    color: #ff0000;
   transition: color .25s;
}
  .SPt:hover a{
  color:#55acee;
  transition: color .25s;
}



`;


