import * as React from 'react';
import './Button.css';

export function Button(props: {
	text: string;
	onClick: () => unknown;
}): JSX.Element {
	return (
		<button
			className={'button'}
			onClick={ props.onClick }
		>
			{ props.text }
		</button>
	);
}