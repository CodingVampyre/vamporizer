/** Written By Tobias Kavsek 2021 */
import {ICharacter} from "./ICharacter";

export interface ICampaign {
	name: string;
	characters: ICharacter[];
	characterDrafts?: ICharacter[];
}
