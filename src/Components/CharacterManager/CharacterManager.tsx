import * as React from 'react';
import './CharacterManager.css';
import {Header} from "../Common/Header/Header";
import {Modal} from "../Common/Modal/Modal";
import {Input} from "../Common/Input/Input";
import {useContext, useEffect, useState} from "react";
import {CharacterList} from "./CharacterList/CharacterList";
import {CampaignContext} from "../../Context/CampaignContext";

export function CharacterManager(): JSX.Element {

	const [newCharacterName, setNewCharacterName] = useState<string>('');
	const { campaigns, currentCampaign, addCharacterDraft, currentCharacter } = useContext(CampaignContext);

	useEffect(() => {
		console.log(currentCharacter, currentCampaign);
	})

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
					</>
				)
			}
		</div>
	);
}