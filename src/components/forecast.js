import React from 'react';
import { Grid, Segment, Card } from 'semantic-ui-react';
import moment from 'moment';
import Icon from './icon';

function Forecast(data) {
	console.log(data);
	const daily = data.data.daily;

	return (
		<div className='daily'>
			<div style={{color:'white', textAlign: 'center', marginTop: '10px', letterSpacing: '.5px'}}>
				
				<h3>{daily.summary}</h3>
			</div>

			<Segment>
				<Grid columns={5} divided stackable>
					<Grid.Column>
						<h5>{moment.unix(daily.data[2].time).format('dddd')} <Icon icon_name={daily.data[2].icon.replace(/-/g, '_')} /></h5>
						<div>{daily.data[2].summary}</div>
						<div style={{marginTop:'5px'}}>High {Math.round(daily.data[2].apparentTemperatureHigh)}&#176;. Low {Math.round(daily.data[2].apparentTemperatureLow)}&#176;.</div>
					</Grid.Column>

					<Grid.Column>
						<h5>{moment.unix(daily.data[3].time).format('dddd')} <Icon icon_name={daily.data[3].icon.replace(/-/g, '_')} /></h5>
						<div>{daily.data[3].summary}</div>
						<div style={{marginTop:'5px'}}>High {Math.round(daily.data[3].apparentTemperatureHigh)}&#176;. Low {Math.round(daily.data[3].apparentTemperatureLow)}&#176;.</div>
					</Grid.Column>

					<Grid.Column>
						<h5>{moment.unix(daily.data[4].time).format('dddd')} <Icon icon_name={daily.data[4].icon.replace(/-/g, '_')} /></h5>
						<div>{daily.data[4].summary}</div>
						<div style={{marginTop:'5px'}}>High {Math.round(daily.data[4].apparentTemperatureHigh)}&#176;. Low {Math.round(daily.data[4].apparentTemperatureLow)}&#176;.</div>
					</Grid.Column>

					<Grid.Column>
						<h5>{moment.unix(daily.data[5].time).format('dddd')} <Icon icon_name={daily.data[5].icon.replace(/-/g, '_')} /></h5>
						<div>{daily.data[5].summary}</div>
						<div style={{marginTop:'5px'}}>High {Math.round(daily.data[5].apparentTemperatureHigh)}&#176;. Low {Math.round(daily.data[5].apparentTemperatureLow)}&#176;.</div>
					</Grid.Column>

					<Grid.Column>
						<h5>{moment.unix(daily.data[6].time).format('dddd')} <Icon icon_name={daily.data[6].icon.replace(/-/g, '_')} /></h5>
						<div>{daily.data[6].summary}</div>
						<div style={{marginTop:'5px'}}>High {Math.round(daily.data[6].apparentTemperatureHigh)}&#176;. Low {Math.round(daily.data[6].apparentTemperatureLow)}&#176;.</div>
					</Grid.Column>
				</Grid>
			</Segment>

			
		</div>
	);
}

export default Forecast;