import React from 'react';
import { Divider } from 'semantic-ui-react';
import moment from 'moment';

const Location = () => (
	<div style={{margin: `5px`, color: 'white'}}>
		<h2>Seattle, Wa.</h2> 
		<small>Today is {moment().format('dddd[,] MMM Do')}</small>  
		<Divider />
	</div>
);

export default Location;