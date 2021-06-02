import * as React from 'react';
import './CharacterList.css';
import {ICharacter} from "../../../Domain/ICharacter";
import {CharacterListEntry} from "./CharacterListEntry";

export function CharacterList(props: {
	characters: ICharacter[];
	type: 'draft' | 'character';
}): JSX.Element {

	return (
		<div className={'character-list'}>
			{
				props.characters.map(
					(character, index) => <CharacterListEntry
						key={index}
						character={character}
						type={[index, props.type]}
					/>
				)
			}
		</div>
	);
}