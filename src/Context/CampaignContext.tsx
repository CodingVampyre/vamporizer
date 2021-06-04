import * as React from "react";
import {Wrapper} from "../Components/Wrapper/Wrapper";
import {ICampaign} from "../Domain/ICampaign";
import {useState} from "react";
import * as _ from "lodash";
import {createDraftParams, createEmptyCharacter} from "../Objects/createEmptyCharacter";
import {ICharacterDraft} from "../Domain/ICharacter";
import {IClan} from "../Domain/IClan";
import {IArchetype} from "../Domain/IArchetype";

export type TCurrentCharacter = [number, 'draft' | 'character'] | undefined;

export const CampaignContext = React.createContext<{
	campaign: ICampaign,
	currentCharacter: TCurrentCharacter,

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
	setCurrentCharacter: (current: TCurrentCharacter) => unknown,
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
	setCurrentCharacter: (current: TCurrentCharacter) => {},
});

export function App(): JSX.Element {

	const [campaign, setCampaign] = useState<ICampaign>({ name: 'New Campaign', characterDrafts: [], characters: [] });
	const [currentCharacter, setCurrentCharacter] = useState<TCurrentCharacter>(undefined);

	// CHARACTERS

	function addCharacterDraft(characterName: string): number {
		let id;
		setCampaign(last => {
			const current = _.cloneDeep(last);
			const character = createEmptyCharacter(characterName, campaign.name);
			const draftParams = createDraftParams();
			id = current.characterDrafts.push({ character, draftParams });
			return current;
		});
		return id;
	}

	function retrieveCurrentCharacterDraft(): ICharacterDraft {
		return _.cloneDeep(campaign.characterDrafts[currentCharacter[0]]);
	}
	function setCurrentCharacterDraft(character: ICharacterDraft) {
		const current = _.cloneDeep(campaign);
		current.characterDrafts[currentCharacter[0]] = character;
		setCampaign(current);
	}

	const CharacterDraft = {
		setName(name: string) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.name = name;
			setCurrentCharacterDraft(draft);
		},
		setClan(clan: IClan) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.clan = clan;
			setCurrentCharacterDraft(draft);
		},
		setPlayer(player: string) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.player = player;
			setCurrentCharacterDraft(draft);
		},
		setChronicle(chronicle: string) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.chronicle = chronicle;
			setCurrentCharacterDraft(draft);
		},
		setSire(sire: string) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.sire = sire;
			setCurrentCharacterDraft(draft);
		},
		setConcept(concept: string) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.concept = concept;
			setCurrentCharacterDraft(draft);
		},
		setNature(nature: IArchetype) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.nature = nature;
			setCurrentCharacterDraft(draft);
		},
		setDemeanor(demeanor: IArchetype) {
			const draft = retrieveCurrentCharacterDraft();
			draft.character.demeanor = demeanor;
			setCurrentCharacterDraft(draft);
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