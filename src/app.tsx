import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './Context/CampaignContext';

function render() {
	ReactDOM.render(<App />, document.getElementById('root'));
}

render();
