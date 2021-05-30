/** Written By Tobias Kavsek 2021 */
import {IClan} from "./IClan";
import {IArchetype} from "./IArchetype";
import {IAttributes} from "./IAttributes";
import {IAbilities} from "./IAbilities";
import {IAdvantages} from "./IAdvantages";
import {IMeritFlaw} from "./IMeritFlaw";
import {IPath} from "./IPath";
import {IPool} from "./IPool";

export interface ICharacter {
	// Sheet
	name: string;
	player: string;
	chronicle: string;
	nature: IArchetype;
	demeanor: IArchetype;
	concept: string;
	clan: IClan;
	generation: number;
	sire: string;

	attributes: IAttributes;
	abilities: IAbilities;
	advantages: IAdvantages;

	meritsFlaws: IMeritFlaw[];
	path: IPath;
	willpower: IPool;
	bloodPool: IPool;
	health: IPool;
	experience: number;

	// Additional
	inventory: unknown;
	background: string;
}
