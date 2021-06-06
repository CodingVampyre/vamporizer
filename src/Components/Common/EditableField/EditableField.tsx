import * as React from 'react';
import './EditableField.css';
import {useState} from "react";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export function EditableTextField(props: {
	caption: string;
	value: string;
	onConfirm: (text: string) => unknown;
}): JSX.Element {

	const [editMode, setEditMode] = useState<boolean>(false);
	const [editValue, setEditValue] = useState<string>(props.value);

	return (
		<div className={'editable-text-field'}>
			{ !editMode ? (
				<div>
					<span className={'editable-text-field-text'}>{props.caption} { props.value }</span>
					<Button text={'✏️'} onClick={ () => setEditMode(true) } borderless />
				</div>
			) : (
				<div className={'editable-text-field-edit'}>
					<Input onChange={ (newValue) => setEditValue(newValue) } text={editValue} />
					<Button text={'Save'} onClick={ () => {
						props.onConfirm(editValue);
						setEditMode(false);
					} } />
				</div>
			) }
		</div>
	);
}