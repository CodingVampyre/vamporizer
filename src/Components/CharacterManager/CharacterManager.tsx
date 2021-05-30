import * as React from 'react';
import './CharacterManager.css';
import {ICampaign} from "../../Domain/ICampaign";
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {useState} from "react";
import {ICharacter} from "../../Domain/ICharacter";
import {createEmptyCharacter} from "../../Objects/createEmptyCharacter";
import {CharacterList} from "./CharacterList/CharacterList";

export function CharacterManager(props: {
	campaign: ICampaign;
	onCreateDraft: (character: ICharacter) => unknown;
}) {

	const [newCharacterName, setNewCharacterName] = useState<string>('');

	function create() {
		const character: ICharacter = createEmptyCharacter(newCharacterName, props.campaign.name);
		props.onCreateDraft(character);
	}

	return (
		<div className={'character-manager'}>
			<Header text={props.campaign.name} />
			<Modal
				openButtonText={'Create Character'}
				closeButtonText={'Create'}
				abortButtonText={'Abort'}
				onModalConfirm={ create }
			>
				<Header text={'Create Character'} />
				<Input
					onChange={ (text) => setNewCharacterName(text) }
					text={ newCharacterName }
				/>
			</Modal>

			<Header text={'Characters'} />
			<CharacterList characters={props.campaign.characters} />

			<Header text={'Drafts'} />
			<CharacterList characters={props.campaign.characterDrafts} />
		</div>
	);
}