import * as React from 'react';
import {CampaignSelector} from "../CampaignSelector/CampaignSelector";
import './Wrapper.css';
import {CharacterManager} from "../CharacterManager/CharacterManager";
import {useCampaigns} from "../../Hooks/UseCampaigns";

export function Wrapper(): JSX.Element {

	const { currentCampaign } = useCampaigns();

	return (
		<div className={'wrapper'}>
			<p>Current: {currentCampaign}</p>
			{
				currentCampaign === undefined && <CampaignSelector /> || <CharacterManager />
			}
		</div>
	);
}