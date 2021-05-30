/** Written By Tobias Kavsek 2021 */
import {IPerk} from "./IPerk";

export interface IVirtues {
	conscienceConviction: IPerk;
	selfControlInstinct: IPerk;
	courage: IPerk;
}

export interface IAdvantages {
	disciplines: IPerk[];
	backgrounds: IPerk[];
	virtues: IVirtues;
}
