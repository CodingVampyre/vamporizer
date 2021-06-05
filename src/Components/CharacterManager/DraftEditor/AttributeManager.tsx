import * as React from 'react';
import './AttributeManager.css';
import {useContext, useEffect} from "react";
import {CampaignContext} from "../../../Context/CampaignContext";
import {Header} from "../../Common/Header/Header";
import {PerkColumnPointSetter} from "./PerkColumnPointSetter/PerkColumnPointSetter";

export function AttributeManager(): JSX.Element {

	const { campaign, currentCharacter } = useContext(CampaignContext);

	useEffect(() => {
		const characterDraft = campaign.characterDrafts[currentCharacter[0]];
		const pointsGiven = characterDraft.draftParams.attributePoints.pointsGiven;
	}, []);

	return (
		<div className={'attribute-manager'}>
			<div className={'columns'}>
				{
					campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.pointsGiven ? (
						<>
							<Header text={'Points are set! :)'} />
							<Header text={'Physical'} />
							<Header text={'Social'} />
							<Header text={'Mental'} />
						</>
					) : (
						<>
							<PerkColumnPointSetter
								columns={ ['physical', 'social', 'mental'] }
								points={ campaign.characterDrafts[currentCharacter[0]].draftParams.attributeAvailablePoints }
								onFinish={ (propertySet) => console.log(propertySet) }
							/>
						</>
					)
				}
			</div>
		</div>
	);
}
