import React from 'react';
import { Grid, Segment, Divider } from 'semantic-ui-react';
import Icon from './icon';
import moment from 'moment';

const PoweredBy = () => <a className='powered-by' href='https://darksky.net/poweredby/' target='_blank'>Powered by Dark Sky</a>;

function CurrentWeather(data) {
	const current = data.data.currently;
	const icon    = current.icon.replace(/-/g, '_');

	return (
		<div className='current-weather'>
			<Segment>
				<h4>Current Weather Conditions in Seattle</h4>
				<div style={{fontSize: '12px', color: 'gray'}}>
					As of {moment.unix(current.time).format('h:mm a')}
				</div>
				<div style={{textAlign: 'right'}}>
					<small><PoweredBy /></small>
				</div>
			</Segment>
			
			<Grid>
				<Grid.Column width={11}>

					<Segment>
						<Grid stackable>
							<Grid.Column width={3} style={{textAlign: 'center'}}> 
								<div style={{fontSize: '50px'}}><Icon icon_name={icon} /></div>
								<div style={{marginTop: '5px'}}>
									<div style={{fontSize: '11px'}}>
										Feels like
									</div>
									{Math.round(current.apparentTemperature)} &#176;F
								</div>
							</Grid.Column>

							<Grid.Column width={13}>
								<p style={{color:'gray'}}>
									Currently <span style={{color:'black'}}>{current.summary}</span> with a 
									temperature of <span style={{color:'black'}}>{Math.round(current.temperature)} &#176;F</span>
								</p>
								<p style={{color:'gray'}}>
									About {Math.round(current.cloudCover * 100)}% of the sky is clouds with a UV Index of {current.uvIndex}.
								</p>
								<p style={{fontSize: '12px'}}>
									<span style={{color:'gray'}}>Humidity</span> {Math.round(current.humidity*100)}%
								</p>
							</Grid.Column>
						</Grid>
					</Segment>
				
				</Grid.Column>

				<Grid.Column width={5} style={{textAlign: 'center'}}>
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