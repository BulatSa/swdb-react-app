import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from "../people-page";
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

	state = {
		showRandomPlanet: true
	};

	render() {

		const planet = this.state.showRandomPlanet ?
			<RandomPlanet/> :
			null;

		return (
			<div className='container'>
				<ErrorBoundry>
					<div className="stardb-app">
						<Header />
						{ planet }

						<PeoplePage />

					</div>
				</ErrorBoundry>
			</div>

		);
	}
}