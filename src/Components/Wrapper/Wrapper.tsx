import * as React from 'react';
import {CampaignSelector} from "../CampaignSelector/CampaignSelector";
import './Wrapper.css';
import {useState} from "react";
import {ICampaign} from "../../Domain/ICampaign";

export function Wrapper(): JSX.Element {

	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [activeCampaign, setActiveCampaign] = useState<ICampaign | undefined>(undefined);

	return (
		<div className={'wrapper'}>
			<CampaignSelector
				campaigns={campaigns}
				onCreateCampaign={ campaign => {
					setCampaigns(old => {
						const current = old.slice();
						current.push(campaign);
						return current;
					})
				} }
				onSelectCampaign={ index => setActiveCampaign(campaigns[index]) }
			/>
			<p>{activeCampaign?.name || 'None'}</p>
		</div>
	);
}