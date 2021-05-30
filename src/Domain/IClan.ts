import {IWeakness} from "./IWeakness";

export enum ClanType {
	CLAN = 'clan',
	BLOODLINE = 'bloodline'
}

export interface IClan {
	name: string;
	weakness: IWeakness;
	type: ClanType;
}
