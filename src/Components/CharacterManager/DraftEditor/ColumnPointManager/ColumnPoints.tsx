import * as React from 'react';
import './ColumnPoints.css';
import {IPerk} from "../../../../Domain/IPerk";
import {PoolPoint} from "../../../Common/Button/PoolPoint";

export function ColumnPoints(props: {
	availablePoints: number;
	onSet: (selectedPoints: number, remainingPoints: number) => unknown;
	perk: IPerk;
}): JSX.Element {
	return (
		<div className={'column-points'}>
			<span>{ props.perk.name }</span>
			<PoolPoint onClick={() => {}} filledIn={true} />
			<PoolPoint onClick={() => {}} filledIn={false} />
			<PoolPoint onClick={() => {}} filledIn={false} />
			<PoolPoint onClick={() => {}} filledIn={false} />
			<PoolPoint onClick={() => {}} filledIn={false} />
		</div>
	);
}