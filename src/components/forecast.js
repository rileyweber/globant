import React from 'react';
import { Grid, Segment, Card } from 'semantic-ui-react';
import moment from 'moment';
import Icon from './icon';

function Forecast(data) {
	const daily    = data.data.daily;
	let days_count = 1;

	return (
		<div className='daily'>
			<div style={{color:'white', textAlign: 'center', marginTop: '10px', letterSpacing: '.5px'}}>
				<h3>{daily.summary}</h3>
			</div>

			<Segment>
				<Grid columns={5} divided stackable>

					{daily.data.map(( weather, index ) => {
						const today = moment.unix(data.data.currently.time);
						const now   = moment.unix(weather.time);

						if (now.format('YYMMDD') > today.format('YYMMDD') && days_count <= 5) {
							days_count++;

							return (
								<Grid.Column key={index}>
									<h5>{now.format('ddd')} <Icon icon_name={weather.icon.replace(/-/g, '_')} /></h5>
									<div>{weather.summary}</div>
									<div style={{marginTop: '5px'}}>High {Math.round(weather.apparentTemperatureHigh)}&#176;. Low {Math.round(weather.apparentTemperatureLow)}&#176;.</div>
								</Grid.Column>
							);
						}
					})}

				</Grid>
			</Segment>
		</div>
	);
}

export default Forecast;