import React, { Component } from 'react';
import logo from '../logo.svg';



export default class Navbar2 extends Component {
	render() {
		return (


<div className="mw9 center ph3-ns pb-5">
  <div className="cf ph2-ns bg-silver shadow-5">
    
    <div className="fl w-30 w-third-ns pa2">
	      <div className="bg-silver pv4">
		      <img alt='logo'src={logo} />
	      </div>
    </div>
    <div className="fl w-30 w-third-ns pa2">
	      <div className=" bg-silver pv4">
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
