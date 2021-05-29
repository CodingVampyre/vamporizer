/** Written By Tobias Kavsek 2021 */
import {IBuff} from "./IBuff";

export interface IItem {
	name: string;
	description: string;
	buff: IBuff;
}

export interface IInventory {
	items: IItem[];
}