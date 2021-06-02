import * as React from 'react';
import './CharacterManager.css';
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {useContext, useState} from "react";
import {CharacterList} from "./CharacterList/CharacterList";
import {CampaignContext} from "../../Context/CampaignContext";
import {DraftEditor} from "./DraftEditor/DraftEditor";

export function CharacterManager(): JSX.Element {

	const [newCharacterName, setNewCharacterName] = useState<string>('');
	const { campaigns, currentCampaign, addCharacterDraft, currentCharacter } = useContext(CampaignContext);

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

			{
				!currentCharacter && (
					<>
						<Header text={'Characters'} />
						<CharacterList
							characters={campaigns[currentCampaign].characters}
							type={'character'}
						/>

						<Header text={'Drafts'} />
						<CharacterList
							characters={campaigns[currentCampaign].characterDrafts}
							type={'draft'}
						/>
					</>
				) || (
					<>
						<Header text={'Character'} />
						{
							currentCharacter[1] === 'draft' ? <DraftEditor /> : <div />
						}
					</>
				)
			}
		</div>
	);
}