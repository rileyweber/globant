import React from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import Icon from './icon';
import moment from 'moment';

function CurrentWeather(data) {
	const current = data.data.currently;
	const icon    = current.icon.replace(/-/g, '_');

	return (
		<div className='current-weather'>
			<Segment>
				<h4>{moment.unix(current.time).format('dddd MMM Do')} in Seattle</h4>
				<div style={{fontSize: '12px', color: 'gray'}}>{moment.unix(current.time).format('h:mm a')}</div>
			</Segment>
			
			<Grid>
				<Grid.Column width={12}>

					<Segment>
						<Grid stackable>
							<Grid.Column width={3} style={{textAlign: 'center'}}> 
								<div style={{fontSize: '50px'}}><Icon icon_name={icon} /></div>
								<div style={{marginTop: '5px'}}>
									<div style={{fontSize: '11px'}}>Feels like</div>
									{Math.round(current.apparentTemperature)} &#176;F
								</div>
							</Grid.Column>

							<Grid.Column width={13}>
								<p style={{color:'gray'}}>Currently <span style={{color:'black'}}>{current.summary}</span> with a temperature of <span style={{color:'black'}}>{Math.round(current.temperature)} &#176;F</span></p>
								<p style={{fontSize: '12px'}}><span style={{color:'gray'}}>Humidity</span> {Math.round(current.humidity*100)}%</p>
								<p style={{fontSize: '11px'}}>{moment.unix(current.time).format('dddd MMM Do h:mm a')}</p>
							</Grid.Column>
						</Grid>
					</Segment>
				
				</Grid.Column>

				<Grid.Column width={4} style={{textAlign: 'center'}}>
					<Segment>
						<div>
							<small style={{color:'gray'}}>Wind Speed</small>
							<br />
							{current.windSpeed}mph
						</div>
						<Divider />
						<div>
							<small style={{color:'gray'}}>Dew Point</small>
							<br />
							{current.dewPoint} &#176;F
						</div>
					</Segment>
				</Grid.Column>
			</Grid>

		</div>
	);
}

export default CurrentWeather;