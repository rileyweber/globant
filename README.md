### The Problem
Create a web app that display the current weather along with forecasted highs and lows for the next 5 days.

### The Solution
#### Accessible at http://weather.rileypweber.com

After weighing my options between building this web page out manually with javascript/jquery and HTML/CSS, I decided the better solution would be to use React as it specializes in simple, single page applications - I ended up using the extremely helpful "create-react-app" tool to complete this task. 

To make design and layout simpler, I utilized Semantic UI.

For handling DarkSky's times, I used Moment.js and to make requests to the DarkSky API I used Axios.

A small limitation presented by DarkSky's API is it's authentication and the fact that CORS is disabled. To solve this, I set up the simplest of simple API servers that accepts "endpoint," "lat," and "lon" parameters in a GET request in order to make the actual DarkSky API request while keeping my secret key secure. (http://darksky.rileypweber.com?endpoint=forecast&lat={latitude}&lon={longitude} makes the request https://api.darksky.net/forecast/{secret_key}/{lat},{lon})


### Setup
To start, regardless of the environment being used, this app has the following dependencies:
* NodeJS (https://nodejs.org/en/download/)
* Create React App (npm install create-react-app)
* Personally, I used Yarn but this is not required

1. Clone the reposity
```
git clone https://github.com/rileyweber/globant.git
```

2. cd into the 'globant' directory
```
cd globant
```

3. Run yarn to install packages and start the development server
```
yarn && yarn start
```

You will be directed to your browser pointing to localhost:3000 which now displays the current weather and 5-day forecast for Seattle, Wa.

To build the project, simply run `yarn build` which creates the build directory. Whatever server software is being used, this is the public directory that will be served. In my case, I already had Apache serving other content so I merely added a new virtual host config file to the sites-available directory and ran `sudo a2ensite {config file name} && sudo service apache2 restart`


