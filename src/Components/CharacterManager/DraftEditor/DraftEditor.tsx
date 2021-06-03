import * as React from 'react';
import './DraftEditor.css';
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";
import {EditableTextField} from "../../Common/EditableField/EditableField";
import {EditableListField} from "../../Common/EditableField/EditableListField";
import {Clans} from "../../../Objects/Clans";
import {Category} from "../../Common/Category/Category";

export function DraftEditor(): JSX.Element {

	const { campaigns, currentCampaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	return (
		<div className={'draft-editor'}>
			<Category>
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
				<EditableTextField
					caption={'Player:'}
					value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].player}
					onConfirm={ (value) => CharacterDraft.setPlayer(value) }
				/>
				<EditableTextField
					caption={'Chronicle:'}
					value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].chronicle}
					onConfirm={ (value) => CharacterDraft.setChronicle(value) }
				/>
				<EditableTextField
					caption={'Sire:'}
					value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].sire}
					onConfirm={ (value) => CharacterDraft.setSire(value) }
				/>
				<EditableTextField
					caption={'Concept:'}
					value={campaigns[currentCampaign].characterDrafts[currentCharacter[0]].concept}
					onConfirm={ (value) => CharacterDraft.setConcept(value) }
				/>
			</Category>
		</div>
	);
}
