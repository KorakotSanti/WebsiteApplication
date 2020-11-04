import './styles/Sidebar.css';
import React from 'react'
import { Link } from 'react-router-dom'


export default class Sidebar extends React.Component {
	
	render() {
		return (
			<React.Fragment>
				<div className="my-sidebar">
					<Link to="/" className="btn btn-primary">Hello World</Link>
				</div>
			</React.Fragment>
		);
	}
}