import * as React from 'react';
import './CharacterListEntry.css';
import {ICharacter} from "../../../Domain/ICharacter";

export function CharacterListEntry(props: {
	character: ICharacter,
	index: number,
	onClick: (index: number) => unknown,
}): JSX.Element {
	return (
		<div
			className={'character-list-entry'}
			onClick={ () => props.onClick(props.index) }
		>
			<span className={'character-list-entry-name'}>{props.character.name}</span>
		</div>
	);
}