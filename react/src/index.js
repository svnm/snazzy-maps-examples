import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

function App(props) {

    return (
        <main>
        	<h2>Snazzy Maps Super Simple Example</h2>
        	<h3>
        		<a href="https://snazzymaps.com/style/1/pale-dawn" target="_blank">Blue Water</a>
        	</h3>

        	<h3>
        		<a href="https://snazzymaps.com/explore" target="_blank">More Snazzy maps styles</a>
        	</h3>

        	<Map />
 
        </main>
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
