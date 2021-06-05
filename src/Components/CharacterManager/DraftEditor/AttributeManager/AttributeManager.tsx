import * as React from 'react';
import './AttributeManager.css';
import {useContext} from "react";
import {CampaignContext} from "../../../../Context/CampaignContext";
import {Header} from "../../../Common/Header/Header";
import {PerkColumnPointSetter, PropertySet} from "../PerkColumnPointSetter/PerkColumnPointSetter";
import {ColumnPointManager} from "../ColumnPointManager/ColumnPointManager";

export function AttributeManager(): JSX.Element {

	const { campaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	function storeAttributePoints(set: PropertySet) {
		const results = { physical: 0, social: 0, mental: 0, };

		for (const property of set) {
			switch (property.name) {
				case 'physical': results.physical = property.points; break;
				case 'mental': results.mental = property.points; break;
				case 'social': results.social = property.points; break;
				default: console.error('MYSTERIOUS PROPERTY');
			}
		}

		CharacterDraft.setAttributePointRelation(results);
	}

	return (
		<div className={'attribute-manager'}>
			<div className={'columns'}>
				{
					campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.pointsGiven ? (
						<>
							<ColumnPointManager
								name={`Physical (${campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.physical})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.attributes.physical}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.physical}
								onSelectValue={ (valueIndex, height) =>  console.log(valueIndex, height)}
							/>
							<ColumnPointManager
								name={`Social (${campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.social})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.attributes.social}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.social}
								onSelectValue={ (valueIndex, height) =>  console.log(valueIndex, height)}
							/>
							<ColumnPointManager
								name={`Mental (${campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.mental})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.attributes.mental}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.attributePoints.mental}
								onSelectValue={ (valueIndex, height) =>  console.log(valueIndex, height)}
							/>
						</>
					) : (
						<>
							<PerkColumnPointSetter
								columns={ ['physical', 'social', 'mental'] }
								points={ campaign.characterDrafts[currentCharacter[0]].draftParams.attributeAvailablePoints }
								onFinish={ (propertySet) => storeAttributePoints(propertySet) }
							/>
						</>
					)
				}
			</div>
		</div>
	);
}
