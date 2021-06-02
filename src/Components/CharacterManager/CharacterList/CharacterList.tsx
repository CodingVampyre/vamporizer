import * as React from 'react';
import './CharacterList.css';
import {ICharacter} from "../../../Domain/ICharacter";
import {CharacterListEntry} from "./CharacterListEntry";
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";

export function CharacterList(props: {
	characters: ICharacter[];
}): JSX.Element {

	const { setCurrentCharacter } = useContext(CampaignContext);

	return (
		<div className={'character-list'}>
			{
				props.characters.map(
					(character, index) => <CharacterListEntry
						key={index}
						character={character}
						index={index}
						onClick={(index) => setCurrentCharacter(index) }
					/>
				)
			}
		</div>
	);
}