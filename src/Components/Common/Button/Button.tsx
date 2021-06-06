import * as React from 'react';
import './Button.css';

export function Button(props: {
	text: string;
	borderless?: boolean;
	onClick: () => unknown;
}): JSX.Element {
	return (
		<button
			className={`button ${props.borderless ? 'borderless' : ''}`}
			onClick={ props.onClick }
		>
			{ props.text }
		</button>
	);
}