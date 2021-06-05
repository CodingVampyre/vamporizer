import * as React from 'react';
import './PoolPoint.css';

export function PoolPoint(props: {
	onClick: () => unknown;
	filledIn: boolean;
}): JSX.Element {
	return (
		<div className={`pool-point ${ props.filledIn ? 'pool-point-filled' : 'pool-point-empty' }`} />
	);
}