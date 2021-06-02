import * as React from "react";
import {Wrapper} from "../Components/Wrapper/Wrapper";
import {ICampaign} from "../Domain/ICampaign";
import {useState} from "react";
import * as _ from "lodash";
import {createEmptyCharacter} from "../Objects/createEmptyCharacter";

export const CampaignContext = React.createContext<{
	campaigns: ICampaign[],
	currentCampaign: number | undefined,
	currentCharacter: number | undefined,

	createCampaign: (name: string) => unknown,
	setCurrentCampaign: (index: number) => unknown,
	addCharacterDraft: (characterName: string) => unknown,
	setCurrentCharacter: (index: number) => unknown,
}>({
	campaigns: [],
	currentCampaign: undefined,
	currentCharacter: undefined,
	createCampaign: (name: string) => {},
	setCurrentCampaign: (index: number) => {},
	addCharacterDraft: (characterName: string) => {},
	setCurrentCharacter: ((index: number) => {}),
});

export function App() {

	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [currentCampaign, setCurrentCampaign] = useState<number | undefined>(undefined);
	const [currentCharacter, setCurrentCharacter] = useState<number | undefined>(undefined);

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

	return (
		<CampaignContext.Provider value={{
			campaigns,
			currentCampaign,
			currentCharacter,

			createCampaign,
			setCurrentCampaign,
			addCharacterDraft,
			setCurrentCharacter,
		}}>
			<Wrapper />
		</CampaignContext.Provider>
	);
}