import * as React from 'react';
import './ColumnPointManager.css';
import {Header} from "../../../Common/Header/Header";
import {IPerk} from "../../../../Domain/IPerk";
import {useState} from "react";
import {ColumnPoints} from "./ColumnPoints";

export function ColumnPointManager(props: {
	name: string;
	columns: IPerk[];
	availablePoints: number;
}): JSX.Element {

	const [remainingPoints, setRemainingPoints] = useState<number>(props.availablePoints);

	return (
		<div className={'column-point-manager'}>
			<Header text={props.name} />
			{
				props.columns.map((column, index) => (
					<div key={index}>
						<ColumnPoints
							availablePoints={props.availablePoints}
							onSet={ (selected, remaining) => {
								console.log(`Chose ${selected} (${remaining}) remaining`);
							} }
							perk={column}
						/>
					</div>
				))
			}
		</div>
	);
}