import {ICharacter} from "../Domain/ICharacter";
import {PathsEnum} from "./PathEnum";

export function createEmptyCharacter(name: string, campaign: string): ICharacter {
	return {
		name: name,
		player: '',
		abilities: {
			talents: {
				alertness: { name: 'Alertness', points: 0, description: '' },
				athletics: { name: 'Athletics', points: 0, description: '' },
				awareness: { name: 'Awareness', points: 0, description: '' },
				brawl: { name: 'Brawl', points: 0, description: '' },
				empathy: { name: 'Empathy', points: 0, description: '' },
				expression: { name: 'Expression', points: 0, description: '' },
				intimidation: { name: 'Intimidation', points: 0, description: '' },
				leadership: { name: 'Leadership', points: 0, description: '' },
				streetwise: { name: 'Streetwise', points: 0, description: '' },
				subterfuge: { name: 'Subterfuge', points: 0, description: '' },
			},
			skills: {
				animalKen: { name: 'Animal Ken', points: 0, description: '' },
				crafts: { name: 'Crafts', points: 0, description: '' },
				drive: { name: 'Drive', points: 0, description: '' },
				etiquette: { name: 'Etiquette', points: 0, description: '' },
				firearms: { name: 'Firearms', points: 0, description: '' },
				larceny: { name: 'Larceny', points: 0, description: '' },
				melee: { name: 'Melee', points: 0, description: '' },
				performance: { name: 'Performance', points: 0, description: '' },
				stealth: { name: 'Stealth', points: 0, description: '' },
				survival: { name: 'Survival', points: 0, description: '' },
			},
			knowledges: {
				academics: { name: 'Academics', points: 0, description: '' },
				computer: { name: 'Computer', points: 0, description: '' },
				finance: { name: 'Finance', points: 0, description: '' },
				investigation: { name: 'Investigation', points: 0, description: '' },
				law: { name: 'Law', points: 0, description: '' },
				medicine: { name: 'Medicine', points: 0, description: '' },
				occult: { name: 'Occult', points: 0, description: '' },
				politics: { name: 'Politics', points: 0, description: '' },
				science: { name: 'Science', points: 0, description: '' },
				technology: { name: 'Technology', points: 0, description: '' },
			},
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
			physical: {
				strength: { name: 'Technology', points: 0, description: '' },
				dexterity: { name: 'Technology', points: 0, description: '' },
				stamina: { name: 'Technology', points: 0, description: '' },
			},
			social: {
				charisma: { name: 'Technology', points: 0, description: '' },
				manipulation: { name: 'Technology', points: 0, description: '' },
				appearance: { name: 'Technology', points: 0, description: '' },
			},
			mental: {
				perception: { name: 'Technology', points: 0, description: '' },
				intelligence: { name: 'Technology', points: 0, description: '' },
				wits: { name: 'Technology', points: 0, description: '' },
			}
		},
		background: '',
		bloodPool: { max: 10, current: 10, },
		chronicle: campaign,
		clan: undefined,
		concept: '',
		demeanor: { name: '', description: '' },
		experience: 0,
		generation: 13,
		health: { max: 8, current: 8 }, // TODO use numbered enum
		inventory: [],
		meritsFlaws: [],
		nature: { name: '', description: '' },
		path: {
			name: PathsEnum.HUMANITY,
			level: 0,
			bearing: undefined,
		},
		sire: '',
		willpower: { max: 0, current: 0 } // will be generated
	};
}
