import * as React from 'react';
import './PerkColumnPointSetter.css';
import {Button} from "../../../Common/Button/Button";
import {useEffect, useState} from "react";

type ProperySet = Array<{ name: string; points: number; }>

export function PerkColumnPointSetter(props: {
	columns: string[];
	points: number[];
	onFinish: (set: ProperySet) => unknown;
}): JSX.Element {

	const [currentSet, setCurrentSet] = useState<ProperySet>([]);
	const [remainingColumns, setRemainingColumns] = useState<string[]>(props.columns.slice());
	const [remainingPoints, setRemainingPoints] = useState<number[]>(props.points.slice());
	const [isSetting, setIsSetting] = useState<boolean>(true);

	useEffect(() => {
		// check for end condition
		if (remainingColumns.length === 0) {
			props.onFinish(currentSet);
			setIsSetting(false);
		}
	}, [currentSet]);

	useEffect(() => {
		if (props.columns.length !== props.points.length) {
			setIsSetting(false);
		}
	}, []);

	return (
		<div className={'perk-column-point-setter'}>
			{
				isSetting && remainingColumns.map((column, index) => (
					<Button key={index} text={ column } onClick={ () => {
						// create property set
						const newRemainingPoints = remainingPoints.slice();
						const newRemainingColumns = remainingColumns.slice();
						const newSet = currentSet.slice();

						// fetch objects
						const pointsToSet = newRemainingPoints.shift();

						// create and remove from remaining
						newSet.push({ name: column, points: pointsToSet });
						newRemainingColumns.splice(index, 1);

						// store
						setCurrentSet(newSet);
						setRemainingColumns(newRemainingColumns);
						setRemainingPoints(newRemainingPoints);
					} } />
				))
			}

			{
				!isSetting ? <span>Done!</span> : <span>Set { remainingPoints[0] } points to which perk?</span>
			}
		</div>
	);
}