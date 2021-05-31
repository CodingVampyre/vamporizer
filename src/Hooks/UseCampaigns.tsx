import {useEffect, useState} from "react";
import {ICampaign} from "../Domain/ICampaign";
import * as _ from 'lodash';
import {createEmptyCharacter} from "../Objects/createEmptyCharacter";

export function useCampaigns() {

	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [currentCampaign, setCurrentCampaign] = useState<number | undefined>(undefined);

	// CAMPAIGN MANAGEMENT

	function createCampaign(name: string): void {
		setCampaigns(last => {
			const campaigns = _.cloneDeep(last);
			campaigns.push({ characterDrafts: [], characters: [], name });
			return campaigns;
		});
	}

	// CHARACTERS

	function addCharacterDraft(characterName: string): number {
		let id;
		setCampaigns(last => {
			const campaigns = _.cloneDeep(last);
			const campaign = campaigns[currentCampaign];
			id = campaign.characterDrafts.push(createEmptyCharacter(characterName, campaign.name));
			return campaigns;
		});
		return id;
	}

	return {
		campaigns,
		currentCampaign,
		createCampaign,
		setCurrentCampaign,
		addCharacterDraft,
	};
}