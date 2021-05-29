import * as React from 'react';
import './Input.css';

export function Input(props: {
	onChange: (text: string) => unknown;
	text: string;
}): JSX.Element {
	return (
		<div className={'input-wrapper'}>
			<input
				value={props.text}
				className={'input'}
				type={'text'}
				onChange={ (event) => props.onChange(event.target.value) }
			/>
		</div>
	);
}