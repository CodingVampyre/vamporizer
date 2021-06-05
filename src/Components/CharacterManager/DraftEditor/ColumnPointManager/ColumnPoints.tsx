import * as React from 'react';
import './ColumnPoints.css';
import {IPerk} from "../../../../Domain/IPerk";
import {PoolPoint} from "../../../Common/Button/PoolPoint";
import * as _ from 'lodash';

export function ColumnPoints(props: {
	availablePoints: number;
	onClick: (selectedPoints: number) => unknown;
	perk: IPerk;
}): JSX.Element {
	return (
		<div className={'column-points'}>
			<span>{ props.perk.name }</span>
			{
				_.times(5, i => (
					<PoolPoint
						key= {i}
						onClick={ () => props.onClick(i) }
						filledIn={ i < props.perk.points }
					/>
				))
			}
		</div>
	);
}