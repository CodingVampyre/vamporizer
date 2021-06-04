import * as React from 'react';
import './DraftEditor.css';
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";
import {EditableTextField} from "../../Common/EditableField/EditableField";
import {EditableListField} from "../../Common/EditableField/EditableListField";
import {Clans} from "../../../Objects/Clans";
import {Category} from "../../Common/Category/Category";
import {Archetypes} from "../../../Objects/Archetypes";
import {Header} from "../../Common/Header/Header";

export function DraftEditor(): JSX.Element {

	const { campaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	return (
		<div className={'draft-editor'}>
			<Category>
				<EditableTextField
					caption={'Name:'}
					value={campaign.characterDrafts[currentCharacter[0]].name}
					onConfirm={ (name) => CharacterDraft.setName(name) }
				/>
				<EditableListField
					caption={'Clan:'}
					value={campaign.characterDrafts[currentCharacter[0]].clan}
					list={Clans}
					onSelect={ (value) => CharacterDraft.setClan(value) }
				/>
				<EditableTextField
					caption={'Player:'}
					value={campaign.characterDrafts[currentCharacter[0]].player}
					onConfirm={ (value) => CharacterDraft.setPlayer(value) }
				/>
				<EditableTextField
					caption={'Chronicle:'}
					value={campaign.characterDrafts[currentCharacter[0]].chronicle}
					onConfirm={ (value) => CharacterDraft.setChronicle(value) }
				/>
				<EditableTextField
					caption={'Sire:'}
					value={campaign.characterDrafts[currentCharacter[0]].sire}
					onConfirm={ (value) => CharacterDraft.setSire(value) }
				/>
				<EditableTextField
					caption={'Concept:'}
					value={campaign.characterDrafts[currentCharacter[0]].concept}
					onConfirm={ (value) => CharacterDraft.setConcept(value) }
				/>
				<EditableListField
					caption={'Nature:'}
					value={campaign.characterDrafts[currentCharacter[0]].nature}
					list={Archetypes}
					onSelect={ (value) => CharacterDraft.setNature(value) }
				/>
				<EditableListField
					caption={'Demeanor:'}
					value={campaign.characterDrafts[currentCharacter[0]].demeanor}
					list={Archetypes}
					onSelect={ (value) => CharacterDraft.setDemeanor(value) }
				/>
			</Category>

			<Category>
				<Header text={'Attributes'} />
			</Category>
		</div>
	);
}
