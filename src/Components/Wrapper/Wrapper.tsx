import * as React from 'react';
import './Wrapper.css';
import {CharacterManager} from "../CharacterManager/CharacterManager";

export function Wrapper(): JSX.Element {

	return (
		<div className={'wrapper'}>
			<CharacterManager />
		</div>
	);
}
