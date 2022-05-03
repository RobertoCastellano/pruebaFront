import React from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom';

const Navbar = (props) => {
	return (
		<Fragment>
			<nav className="navbar shadow mt-5">
				<div className="container-fluid">
				 		<Link to="/" className="navbar-brand">{props.titulo}</Link>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Películas" aria-label="Search"/>
				 		<button className="btn" type="submit"><Link to={props.path}>{props.return}</Link></button>
					</form>      
				</div>
			</nav>	
		</Fragment>
	)
}

export default Navbar
