import * as React from 'react';
import {CampaignSelector} from "../CampaignSelector/CampaignSelector";
import './Wrapper.css';
import {useState} from "react";
import {ICampaign} from "../../Domain/ICampaign";
import {CharacterManager} from "../CharacterManager/CharacterManager";

export function Wrapper(): JSX.Element {

	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [activeCampaign, setActiveCampaign] = useState<ICampaign | undefined>(undefined);

	return (
		<div className={'wrapper'}>
			{
				activeCampaign === undefined && (
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
				) || (
					<CharacterManager
						campaign={activeCampaign}
						onCreateDraft={(character) => {
							setActiveCampaign((current) => {
								const drafts = activeCampaign.characterDrafts.slice();
								drafts.push(character);
								const next: ICampaign =  {
									...current,
									characterDrafts: drafts,
								}
								return next;
							});
						}}
					/>
				)
			}
		</div>
	);
}