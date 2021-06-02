import * as React from 'react';
import './CharacterListEntry.css';
import {ICharacter} from "../../../Domain/ICharacter";
import {CampaignContext, CurrentCharacterType} from "../../../Context/CampaignContext";
import {useContext} from "react";

export function CharacterListEntry(props: {
	character: ICharacter;
	type: CurrentCharacterType;
}): JSX.Element {

	const { setCurrentCharacter } = useContext(CampaignContext);

	return (
		<div
			className={'character-list-entry'}
			onClick={ () => {
				setCurrentCharacter(props.type);
				console.log('set to', props.type);
			} }
		>
			<span className={'character-list-entry-name'}>{props.character.name}</span>
		</div>
	);
}