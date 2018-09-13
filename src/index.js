import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { Container, Loader, Divider } from 'semantic-ui-react';

import Location from './components/location';
import CurrentWeather from './components/current';
import Forecast from './components/forecast';

class Page extends React.Component {
	state = {
		data: false,
		lat: 47.6062,
		lon: -122.3321
	};

	componentDidMount() {
		axios
		.post(`http://darksky.rileypweber.com?endpoint=forecast&lat=${this.state.lat}&lon=${this.state.lon}`)
		.then(resp => {
			const data    = resp.data;
			const current = data.currently;

			this.setState({data: data});
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {

		if (!this.state.data) {
			return (
				<Container>
					<Location />
					<Loader className='init-loader' active />
				</Container>
			);
		}
		else {
			return (
				<Container>
					<Location />
					<CurrentWeather data={this.state.data} />
					<Divider />
					<Forecast data={this.state.data} />
				</Container>
			);
		}
	}
}


function PageOld() {
	const lat = 47.6062;
	const lon = -122.3321;
	
	axios
		.post(`http://darksky.rileypweber.com?endpoint=forecast&lat=${lat}&lon=${lon}`)
		.then(resp => {
			const data    = resp.data;
			const current = data.currently;
			
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		});

	return (
		<Container>
			<Location />
			<Loader className='init-loader' active />
		</Container>
		/*<div className='main-body'>*/
			/*<Location />*/
			/*<CurrentWeather />*/
		/*</div>*/
	);
}

ReactDOM.render(<Page />, document.getElementById('root'));