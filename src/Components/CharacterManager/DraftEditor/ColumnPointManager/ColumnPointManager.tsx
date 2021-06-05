import * as React from 'react';
import './ColumnPointManager.css';
import {Header} from "../../../Common/Header/Header";
import {IPerk} from "../../../../Domain/IPerk";
import {ColumnPoints} from "./ColumnPoints";

export function ColumnPointManager(props: {
	name: string;
	columns: IPerk[];
	availablePoints: number;
	onSelectValue: (valueIndex: number, selected: number) => unknown;
}): JSX.Element {
	return (
		<div className={'column-point-manager'}>
			<Header text={props.name} />
			{
				props.columns.map((column, index) => (
					<div key={index}>
						<ColumnPoints
							availablePoints={props.availablePoints}
							onClick={ (height) => props.onSelectValue(index, height) }
							perk={column}
						/>
					</div>
				))
			}
		</div>
	);
}