import * as React from "react";
import {Wrapper} from "../Components/Wrapper/Wrapper";
import {ICampaign} from "../Domain/ICampaign";
import {useState} from "react";
import * as _ from "lodash";
import {createEmptyCharacter} from "../Objects/createEmptyCharacter";
import {ICharacter} from "../Domain/ICharacter";

export type CurrentCharacterType = [number, 'draft' | 'character'] | undefined;

export const CampaignContext = React.createContext<{
	campaigns: ICampaign[],
	currentCampaign: number | undefined,
	currentCharacter: CurrentCharacterType,

	CharacterDraft: {
		setName: (name: string) => unknown;
	},

	createCampaign: (name: string) => unknown,
	setCurrentCampaign: (index: number) => unknown,
	addCharacterDraft: (characterName: string) => unknown,
	setCurrentCharacter: (current: CurrentCharacterType) => unknown,
}>({
	campaigns: [],
	currentCampaign: undefined,
	currentCharacter: [undefined, undefined],

	CharacterDraft: {
		setName: (name: string) => {}
	},

	createCampaign: (name: string) => {},
	setCurrentCampaign: (index: number) => {},
	addCharacterDraft: (characterName: string) => {},
	setCurrentCharacter: (current: CurrentCharacterType) => {},
});

export function App() {

	const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
	const [currentCampaign, setCurrentCampaign] = useState<number | undefined>(undefined);
	const [currentCharacter, setCurrentCharacter] = useState<CurrentCharacterType>(undefined);

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

	function retrieveCurrentCharacterDraft(): ICharacter {
		return _.cloneDeep(campaigns[currentCampaign].characterDrafts[currentCharacter[0]]);
	}
	function setCurrentCharacterDraft(character: ICharacter) {
		const currentCampaigns = _.cloneDeep(campaigns);
		currentCampaigns[currentCampaign].characterDrafts[currentCharacter[0]] = character;
		setCampaigns(currentCampaigns);
	}

	const CharacterDraft = {
		setName(name: string) {
			const character = retrieveCurrentCharacterDraft();
			character.name = name;
			setCurrentCharacterDraft(character);
		}
	};

	return (
		<CampaignContext.Provider value={{
			campaigns,
			currentCampaign,
			currentCharacter,

			CharacterDraft,

			createCampaign,
			setCurrentCampaign,
			addCharacterDraft,
			setCurrentCharacter,
		}}>
			<Wrapper />
		</CampaignContext.Provider>
	);
}