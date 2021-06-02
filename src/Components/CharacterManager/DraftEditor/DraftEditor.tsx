import * as React from 'react';
import './DraftEditor.css';
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";
import {EditableTextField} from "../../Common/EditableField/EditableField";

export function DraftEditor(): JSX.Element {

	const { campaigns, currentCampaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	return (
		<div className={'draft-editor'}>
			<EditableTextField
				value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].name}
				onConfirm={ (name) => CharacterDraft.setName(name) }
			/>
		</div>
	);
}
