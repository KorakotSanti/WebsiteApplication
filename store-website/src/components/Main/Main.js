import React from 'react';
import './styles/Main.css';
import Sidebar from '../Sidebar/Sidebar';
import Homepage from '../Homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom'


export default class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			isOpen: true,
			sidebarCSS: 'sidebar-open',
			componentCSS: 'component-open'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.state.isOpen) {
			this.setState(state => ({
				isOpen: !state.isOpen,
				sidebarCSS: 'sidebar-close',
				componentCSS: 'component-close'
			}));
		} else {
			this.setState(state => ({
				isOpen: !state.isOpen,
				sidebarCSS: 'sidebar-open',
				componentCSS: 'component-open'
			}));
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row high">
						<div className={this.state.sidebarCSS}>
							<Sidebar />
						</div>
						<div className="boop" onClick={this.handleClick}></div>
						<div className={this.state.componentCSS}>
							<Switch>
								<Route path="/home" component={Homepage} />
								<Redirect from="/" to="/home" />
							</Switch>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}