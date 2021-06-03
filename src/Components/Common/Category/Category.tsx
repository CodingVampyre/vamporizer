import * as React from 'react';
import './Category.css';

export function Category(props: {
	children: JSX.Element | JSX.Element[];
}): JSX.Element {
	return (
		<div className={'category'}>
			{ props.children }
		</div>
	);
}
