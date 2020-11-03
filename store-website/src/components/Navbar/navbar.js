import React from 'react'
import { Link } from 'react-router-dom'
import { faAddressCard, faSocks, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/navbar.css';

export default class Navbar extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/"><FontAwesomeIcon spin="auto" size="2x" icon={faSocks}/></Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/" id="brand-name">Used Socks</Link>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link bigger"><FontAwesomeIcon size="2x" icon={faAddressCard} className="font-awesome"/> Sign Up</Link>
						</li>
						<li className="nav-item active">
							<Link className="nav-link bigger"><FontAwesomeIcon size="2x" icon={faUser} className="font-awesome"/> Login</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}