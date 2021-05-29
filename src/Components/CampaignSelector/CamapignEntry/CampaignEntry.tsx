import * as React from 'react';
import './CampaignEntry.css';

export function CampaignEntry(props: {
	name: string;
	index: number;
	onClick: (index: number) => void;
}): JSX.Element {
	return (
		<div
			className={'campaign-entry'}
			onClick={ () => props.onClick(props.index) }
		>
			<span>{props.name}</span>
		</div>
	);
}
