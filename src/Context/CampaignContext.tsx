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
	campaign: ICampaign,
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

	addCharacterDraft: (characterName: string) => unknown,
	setCurrentCharacter: (current: CurrentCharacterType) => unknown,
}>({
	campaign: { name: '', characters: [], characterDrafts: [] },
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

	addCharacterDraft: (characterName: string) => {},
	setCurrentCharacter: (current: CurrentCharacterType) => {},
});

export function App(): JSX.Element {

	const [campaign, setCampaign] = useState<ICampaign>({ name: 'New Campaign', characterDrafts: [], characters: [] });
	const [currentCharacter, setCurrentCharacter] = useState<CurrentCharacterType>(undefined);

	// CHARACTERS

	function addCharacterDraft(characterName: string): number {
		let id;
		setCampaign(last => {
			const current = _.cloneDeep(last);
			id = current.characterDrafts.push(createEmptyCharacter(characterName, campaign.name));
			return current;
		});
		return id;
	}

	function retrieveCurrentCharacterDraft(): ICharacter {
		return _.cloneDeep(campaign.characterDrafts[currentCharacter[0]]);
	}
	function setCurrentCharacterDraft(character: ICharacter) {
		const current = _.cloneDeep(campaign);
		current.characterDrafts[currentCharacter[0]] = character;
		setCampaign(current);
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
			campaign,
			currentCharacter,

			CharacterDraft,

			addCharacterDraft,
			setCurrentCharacter,
		}}>
			<Wrapper />
		</CampaignContext.Provider>
	);
}