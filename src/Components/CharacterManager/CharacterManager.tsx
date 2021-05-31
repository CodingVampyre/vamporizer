import * as React from 'react';
import './CharacterManager.css';
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {useState} from "react";
import {CharacterList} from "./CharacterList/CharacterList";
import {useCampaigns} from "../../Hooks/UseCampaigns";

export function CharacterManager(): JSX.Element {

	const [newCharacterName, setNewCharacterName] = useState<string>('');
	const { campaigns, currentCampaign, addCharacterDraft } = useCampaigns();

	return (
		<div className={'character-manager'}>
			<Header text={campaigns[currentCampaign].name} />
			<Modal
				openButtonText={'Create Character'}
				closeButtonText={'Create'}
				abortButtonText={'Abort'}
				onModalConfirm={ () => addCharacterDraft(newCharacterName) }
			>
				<Header text={'Create Character'} />
				<Input
					onChange={ (text) => setNewCharacterName(text) }
					text={ newCharacterName }
				/>
			</Modal>

			<Header text={'Characters'} />
			<CharacterList characters={campaigns[currentCampaign].characters} />

			<Header text={'Drafts'} />
			<CharacterList characters={campaigns[currentCampaign].characterDrafts} />
		</div>
	);
}