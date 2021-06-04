import {ICharacter} from "../Domain/ICharacter";
import {PathsEnum} from "./PathEnum";
import {ClanType} from "../Domain/IClan";
import {Archetypes} from "./Archetypes";
import {Knowledges, Skills, Talents} from "./Abilities";
import * as _ from 'lodash';
import {Mental, Physical, Social} from "./Attributes";

export function createEmptyCharacter(name: string, campaign: string): ICharacter {
	return {
		name: name,
		player: '',
		abilities: {
			talents: _.cloneDeep(Talents),
			skills: _.cloneDeep(Skills),
			knowledges: _.cloneDeep(Knowledges),
		},
		advantages: {
			disciplines: [],
			backgrounds: [],
			virtues: {
				courage: { name: 'Courage', points: 1, description: '' },
				selfControlInstinct: { name: 'Self Control/Instinct', points: 1, description: '' },
				conscienceConviction: { name: 'Conscience/Conviction', points: 1, description: '' },
			}
		},
		attributes: {
			physical: _.cloneDeep(Physical),
			social: _.cloneDeep(Social),
			mental: _.cloneDeep(Mental),
		},
		background: '',
		bloodPool: { max: 10, current: 10, },
		chronicle: campaign,
		clan: { name: '', weakness: undefined, type: ClanType.CLAN },
		concept: '',
		demeanor: Archetypes[0],
		experience: 0,
		generation: 13,
		health: { max: 8, current: 8 }, // TODO use numbered enum
		inventory: [],
		meritsFlaws: [],
		nature: Archetypes[0],
		path: {
			name: PathsEnum.HUMANITY,
			level: 0,
			bearing: undefined,
		},
		sire: '',
		willpower: { max: 0, current: 0 } // will be generated
	};
}
