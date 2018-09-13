import React from 'react';

const icons = {
	partly_cloudy_night: 'wi-night-alt-cloudy',
	clear_day: 'wi-day-sunny',
	clear_night: 'wi-night-clear',
	rain: 'wi-rain',
	snow: 'wi-snow',
	sleet: 'wi-sleet',
	wind: 'wi-windy',
	fog: 'wi-fog',
	cloudy: 'wi-cloud',
	partly_cloudy_day: 'wi-day-cloudy'
};

const Icon = ({ icon_name }) => <i className={`wi ${icons[icon_name]}`}></i>;

export default Icon;