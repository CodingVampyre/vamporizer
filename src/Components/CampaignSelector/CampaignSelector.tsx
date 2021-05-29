import * as React from 'react';
import {useState} from "react";
import {ICampaign} from "../../Domain/ICampaign";
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {CampaignEntry} from "./CamapignEntry/CampaignEntry";

export function CampaignSelector(props: {
	campaigns: ICampaign[];
	onCreateCampaign: (campaign: ICampaign) => unknown;
	onSelectCampaign: (index: number) => unknown;
}): JSX.Element {

	const [newCampaignName, setNewCampaignName] = useState('');

	function createCampaign(name: string) {
		if (newCampaignName !== '') {
			props.onCreateCampaign({ name, characters: [] });
		}
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
			{
				props.campaigns.map((campaign, index) => (
					<CampaignEntry
						key={index}
						name={ campaign.name }
						index={index}
						onClick={ (index) => props.onSelectCampaign(index) }
					/>
				))
			}
		</div>
	);
}