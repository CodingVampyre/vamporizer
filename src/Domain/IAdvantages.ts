/** Written By Tobias Kavsek 2021 */
import {IPerk} from "./IPerk";

export interface IVirtues {
	conscience?: IPerk;
	conviction?: IPerk;

	selfControl?: IPerk;
	instinct?: IPerk;

	courage: IPerk;
}

export interface IAdvantages {
	disciplines: IPerk[];
	backgrounds: IPerk[];
	Virtues: IVirtues;
}
