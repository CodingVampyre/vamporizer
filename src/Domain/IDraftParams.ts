export interface IDraftParams {

	// 7, 5, 3
	abilityAvailablePoints: number[];

	// 13, 9, 5
	attributeAvailablePoints: number[];

	// assigned points
	attributePoints: {
		physical: number;
		social: number;
		mental: number;
	}

	// assigned points
	abilityPoints: {
		talents: number;
		skills: number;
		knowledges: number;
	}

	// 0 default, +1 for every flaw, -1 for every merit
	meritFlawRelations: number;

}