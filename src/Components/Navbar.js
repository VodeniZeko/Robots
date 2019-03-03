import React, { Component } from 'react';
import logo from '../logo.svg';


export default class Navbar2 extends Component {
	render() {
		return (
			<div className=" bg-silver shadow-5 br2 ph7 w-100 ">
				<nav className="f6 fw6 ttu tracked">
				<div className='db'>
					<img alt='logo'src={logo} />
					</div>
					<a className='dib'>
					<h1 className='#FFFF00'>helo</h1>
					</a>
					<a className='dib'>
					<h1 className='#FFFF00'>helo</h1>
					</a>
				</nav>
				
			</div>
		);
	}
}
