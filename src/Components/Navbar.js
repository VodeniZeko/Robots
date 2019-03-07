import React, { Component } from 'react';
import logo from '../logo.svg';
import Typing from './Typing';


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
	      <div className=" bg-silver pv4">
	      </div>
    </div>
  
  </div>
</div>

		);
	}
}
