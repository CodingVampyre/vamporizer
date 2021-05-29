import * as React from 'react';
import {useState} from "react";
import {ICampaign} from "../../Domain/ICampaign";
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";

export function CampaignSelector(): JSX.Element {

	// TODO add to persistance
	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [newCampaignName, setNewCampaignName] = useState('');

	function createCampaign(name: string) {
		setCampaigns(old => {
			const current = old.slice();
			current.push({ name: name, characters: [] });
			return current;
		});
		setNewCampaignName('');
	}

	return (
		<div className={'campaign-selector'}>
			<Header text={'Campaigns'} />
			<Modal
				openButtonText={'Create New Campaign'}
				closeButtonText={'Create'}
				abortButtonText={'Abort'}
				onModalConfirm={ () => createCampaign(newCampaignName) }
			>
				<Header text={'Create New Campaign'} />
				<Input
					onChange={ (text) => setNewCampaignName(text) }
					text={newCampaignName}
				/>
			</Modal>
			<ul>
				{
					campaigns.map((campaign, index) => <li key={index}>{ campaign.name }</li>)
				}
			</ul>
		</div>
	);
}