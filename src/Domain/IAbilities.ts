/** Written By Tobias Kavsek 2021 */
import {IPerk} from "./IPerk";

export interface ITalents {
	alertness: IPerk;
	athletics: IPerk;
	awareness: IPerk;
	brawl: IPerk;
	empathy: IPerk;
	expression: IPerk;
	intimidation: IPerk;
	leadership: IPerk;
	streetwise: IPerk;
	subterfuge: IPerk;
}

export interface ISkills {
	animalKen: IPerk
	crafts: IPerk
	drive: IPerk
	etiquette: IPerk
	firearms: IPerk
	larceny: IPerk
	melee: IPerk
	performance: IPerk
	stealth: IPerk
	survival: IPerk
}

export interface IKnowledges {
	academics: IPerk;
	computer: IPerk;
	finance: IPerk;
	investigation: IPerk;
	law: IPerk;
	medicine: IPerk;
	occult: IPerk;
	politics: IPerk;
	science: IPerk;
	technology: IPerk;
}

export interface IAbilities {
	talents: ITalents;
	skills: ISkills;
	knowledges: IKnowledges;
}
