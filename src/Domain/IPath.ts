import {PathsEnum} from "../Objects/PathEnum";

/** Written By Tobias Kavsek 2021 */

export interface IPath {
	name: PathsEnum;
	level: number;
	bearing: string;
}