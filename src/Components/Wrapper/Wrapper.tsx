import * as React from 'react';
import {CampaignSelector} from "../CampaignSelector/CampaignSelector";
import './Wrapper.css';

export function Wrapper(): JSX.Element {
	return (
		<div className={'wrapper'}>
			<CampaignSelector />
		</div>
	);
}