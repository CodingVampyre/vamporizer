import * as React from 'react';
import {useState} from "react";
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {CampaignEntry} from "./CamapignEntry/CampaignEntry";
import {useCampaigns} from "../../Context/UseCampaigns";

export function CampaignSelector(): JSX.Element {

	const [newCampaignName, setNewCampaignName] = useState('');
	const { campaigns, setCurrentCampaign, createCampaign } = useCampaigns();

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
				campaigns.map((campaign, index) => (
					<CampaignEntry
						key={index}
						name={ campaign.name }
						index={index}
						onClick={ (index) => setCurrentCampaign(index) }
					/>
				))
			}
		</div>
	);
}