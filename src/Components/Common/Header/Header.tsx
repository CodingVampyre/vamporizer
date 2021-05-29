import * as React from 'react';
import './Header.css';

export function Header(props: {
	text: string;
}) {
	return (
		<p className={'header'}>{ props.text }</p>
	);
}