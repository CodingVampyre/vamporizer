import * as React from 'react';
import './ColumnPoints.css';
import {IPerk} from "../../../../Domain/IPerk";
import {PoolPoint} from "../../../Common/Button/PoolPoint";
import * as _ from 'lodash';

export function ColumnPoints(props: {
	availablePoints: number;
	onSet: (selectedPoints: number) => unknown;
	perk: IPerk;
}): JSX.Element {

	return (
		<div className={'column-points'}>
			<span>{ props.perk.name }</span>
			{
				_.times(5, i => (
					<PoolPoint
						key= {i}
						onClick={() => {
							if (i < props.availablePoints) { props.onSet(i); }
						}}
						filledIn={ i < props.perk.points }
					/>
				))
			}
		</div>
	);
}