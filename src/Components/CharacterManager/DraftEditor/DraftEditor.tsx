import * as React from 'react';
import './DraftEditor.css';
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";
import {EditableTextField} from "../../Common/EditableField/EditableField";
import {EditableListField} from "../../Common/EditableField/EditableListField";
import {Clans} from "../../../Objects/Clans";

export function DraftEditor(): JSX.Element {

	const { campaigns, currentCampaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	return (
		<div className={'draft-editor'}>
			<EditableTextField
				caption={'Name:'}
				value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].name}
				onConfirm={ (name) => CharacterDraft.setName(name) }
			/>
			<EditableListField
				caption={'Clan:'}
				value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].clan}
				list={Clans}
				onSelect={ (value) => CharacterDraft.setClan(value) }
			/>
		</div>
	);
}
