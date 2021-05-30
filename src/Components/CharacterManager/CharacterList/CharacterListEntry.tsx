import * as React from 'react';
import './CharacterListEntry.css';
import {ICharacter} from "../../../Domain/ICharacter";

export function CharacterListEntry(props: {
	character: ICharacter,
	index: number,
}): JSX.Element {
	return (
		<div className={'character-list-entry'}>
			<span className={'character-list-entry-name'}>{props.character.name}</span>
		</div>
	);
}