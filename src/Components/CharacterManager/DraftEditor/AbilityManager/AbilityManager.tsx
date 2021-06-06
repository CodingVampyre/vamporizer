import * as React from 'react';
import './AbilityManager.css';
import {useContext} from "react";
import {CampaignContext} from "../../../../Context/CampaignContext";
import {PerkColumnPointSetter, PropertySet} from "../PerkColumnPointSetter/PerkColumnPointSetter";
import {ColumnPointManager} from "../ColumnPointManager/ColumnPointManager";

export function AbilityManager(): JSX.Element {

	const { campaign, currentCharacter, CharacterDraft } = useContext(CampaignContext);

	function storeAbilityPoints(set: PropertySet) {
		const results = { skills: 0, talents: 0, knowledges: 0, };

		for (const property of set) {
			switch (property.name) {
				case 'skills': results.skills = property.points; break;
				case 'talents': results.talents = property.points; break;
				case 'knowledges': results.knowledges = property.points; break;
				default: console.error('MYSTERIOUS PROPERTY');
			}
		}

		CharacterDraft.setAbilityPointRelation(results);
	}

	return (
		<div className={'ability-manager'}>
			<div className={'columns'}>
				{
					campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.pointsGiven ? (
						<>
							<ColumnPointManager
								name={`Skills (${campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.skills})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.abilities.skills}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.skills}
								onSelectValue={ (valueIndex, height) => CharacterDraft.setAbility(
									'skills',
									campaign.characterDrafts[currentCharacter[0]].character.abilities.skills[valueIndex].name,
									height
								) }
							/>
							<ColumnPointManager
								name={`Talents (${campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.talents})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.abilities.talents}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.talents}
								onSelectValue={ (valueIndex, height) => CharacterDraft.setAbility(
									'talents',
									campaign.characterDrafts[currentCharacter[0]].character.abilities.talents[valueIndex].name,
									height
								) }
							/>
							<ColumnPointManager
								name={`Knowledges (${campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.knowledges})`}
								columns={campaign.characterDrafts[currentCharacter[0]].character.abilities.knowledges}
								availablePoints={campaign.characterDrafts[currentCharacter[0]].draftParams.abilityPoints.knowledges}
								onSelectValue={ (valueIndex, height) => CharacterDraft.setAbility(
									'knowledges',
									campaign.characterDrafts[currentCharacter[0]].character.abilities.knowledges[valueIndex].name,
									height
								) }
							/>
						</>
					) : (
						<>
							<PerkColumnPointSetter
								columns={ ['skills', 'talents', 'knowledges'] }
								points={ campaign.characterDrafts[currentCharacter[0]].draftParams.abilityAvailablePoints }
								onFinish={ (propertySet) => storeAbilityPoints(propertySet) }
							/>
						</>
					)
				}
			</div>
		</div>
	);
}
