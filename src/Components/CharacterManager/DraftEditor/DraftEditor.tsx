import * as React from 'react';
import './DraftEditor.css';
import {useContext} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";

export function DraftEditor(): JSX.Element {

	const { campaigns, currentCampaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	return (
		<div className={'draft-editor'}>
			<p className={'draft-character-name'}>{ campaigns[currentCampaign].characterDrafts[currentCharacter[0]].name }</p>
			<p className={'draft-characer-clan'}>{ campaigns[currentCampaign].characterDrafts[currentCharacter[0]].clan.name }</p>
		</div>
	);
}
