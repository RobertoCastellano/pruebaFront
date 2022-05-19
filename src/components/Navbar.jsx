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
				 		<button className="btn me-5" type="submit"><Link to={props.path}>{props.return}</Link></button>
						<input className="form-control me-2" type="search" placeholder="Buscador" aria-label="Search"/>
					</form>      
				</div>
			</nav>	
		</Fragment>
	)
}

export default Navbar
