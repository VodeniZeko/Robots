import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';


export default class Navbar extends Component {
	render() {
		return (
			
<nav class=" navbar-expand-lg bg-secondary text-white shadow-lg">
	<div className="container py-2">
		<div className='row'>
				{/*this is logo in the navbar */}
			<div className='col-sm-3'>
				<Link to="/"> 
				<img src={logo} alt='logo' className='navbar-brand image-tumbnail rounded-sm' />
				</Link>
			</div>
				{/*this is logo in the navbar */}

				{/*this is text in the navbar */}
			  <div className='col-sm-9 pt-4 text-center text-monospace font-weight-bold'>
				<span class="align-baseline m-3">Say</span>
				<span class="align-top m-3">Hello</span>
				<span class="align-middle m-3">To</span>
				<span class="align-bottom m-3">The</span>
				<span class="align-text-top m-3">Friendly</span>
				<span class="align-text-bottom m-3">Robots</span>
				<span class="align-baseline ">!</span>
			  </div>
			  {/*this is text in the navbar */}
		  </div>
	</div> 
</nav>

		);
	}
}

