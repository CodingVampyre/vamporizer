/** Written By Tobias Kavsek 2021 */
import {IPerk} from "./IPerk";

export interface IPhysical {
	strength: IPerk;
	dexterity: IPerk;
	stamina: IPerk;
}

export interface ISocial {
	charisma: IPerk;
	manipulation: IPerk;
	appearance: IPerk;
}

export interface IMental {
	perception: IPerk;
	intelligence: IPerk;
	wits: IPerk;
}

export interface IAttributes {
	physical: IPhysical;
	social: ISocial;
	mental: IMental;
}