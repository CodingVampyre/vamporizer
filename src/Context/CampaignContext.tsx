import * as React from "react";
import {Wrapper} from "../Components/Wrapper/Wrapper";
import {ICampaign} from "../Domain/ICampaign";
import {useState} from "react";
import * as _ from "lodash";
import {createEmptyCharacter} from "../Objects/createEmptyCharacter";
import {ICharacter} from "../Domain/ICharacter";
import {IClan} from "../Domain/IClan";
import {IArchetype} from "../Domain/IArchetype";

export type CurrentCharacterType = [number, 'draft' | 'character'] | undefined;

export const CampaignContext = React.createContext<{
	campaigns: ICampaign[],
	currentCampaign: number | undefined,
	currentCharacter: CurrentCharacterType,

	CharacterDraft: {
		setName: (name: string) => unknown;
		setClan: (clan: IClan) => unknown;
		setPlayer: (player: string) => unknown;
		setChronicle: (chronicle: string) => unknown;
		setSire: (sire: string) => unknown;
		setConcept: (concept: string) => unknown;
		setNature: (nature: IArchetype) => unknown;
		setDemeanor: (demeanor: IArchetype) => unknown;
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
		setName: (name: string) => {},
		setClan: (clan: IClan) => {},
		setPlayer: (player: string) => {},
		setChronicle: (chronicle: string) => {},
		setSire: (sire: string) => {},
		setConcept: (concept: string) => {},
		setNature: (nature: IArchetype) => {},
		setDemeanor: (demeanor: IArchetype) => {},
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
		},
		setClan(clan: IClan) {
			const character = retrieveCurrentCharacterDraft();
			character.clan = clan;
			setCurrentCharacterDraft(character);
		},
		setPlayer(player: string) {
			const character = retrieveCurrentCharacterDraft();
			character.player = player;
			setCurrentCharacterDraft(character);
		},
		setChronicle(chronicle: string) {
			const character = retrieveCurrentCharacterDraft();
			character.chronicle = chronicle;
			setCurrentCharacterDraft(character);
		},
		setSire(sire: string) {
			const character = retrieveCurrentCharacterDraft();
			character.sire = sire;
			setCurrentCharacterDraft(character);
		},
		setConcept(concept: string) {
			const character = retrieveCurrentCharacterDraft();
			character.concept = concept;
			setCurrentCharacterDraft(character);
		},
		setNature(nature: IArchetype) {
			const character = retrieveCurrentCharacterDraft();
			character.nature = nature;
			setCurrentCharacterDraft(character);
		},
		setDemeanor(demeanor: IArchetype) {
			const character = retrieveCurrentCharacterDraft();
			character.demeanor = demeanor;
			setCurrentCharacterDraft(character);
		},
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