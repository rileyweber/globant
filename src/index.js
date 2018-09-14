import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Loader, Divider } from 'semantic-ui-react';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

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
			this.setState({data: resp.data});
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {

		if (!this.state.data) {
			document.body.classList.add('no-weather');

			return (
				<Container>
					<Location />
					<Loader className='init-loader' active />
				</Container>
			);
		}
		else {
			document.body.classList.remove('no-weather');
			document.body.classList.add(this.state.data.currently.icon);

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

ReactDOM.render(<Page />, document.getElementById('root'));