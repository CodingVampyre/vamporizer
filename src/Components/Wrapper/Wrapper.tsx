import * as React from 'react';
import {CampaignSelector} from "../CampaignSelector/CampaignSelector";
import './Wrapper.css';
import {CharacterManager} from "../CharacterManager/CharacterManager";
import {useContext} from "react";
import {CampaignContext} from "../../Context/CampaignContext";

export function Wrapper(): JSX.Element {

	const { currentCampaign } = useContext(CampaignContext);

	return (
		<div className={'wrapper'}>
			<p>Current: {currentCampaign}</p>
			{
				currentCampaign === undefined && <CampaignSelector /> || <CharacterManager />
			}
		</div>
	);
}