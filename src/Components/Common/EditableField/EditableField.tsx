import * as React from 'react';
import './EditableField.css';
import {useState} from "react";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export function EditableTextField(props: {
	value: string;
	onConfirm: (text: string) => unknown;
}): JSX.Element {

	const [editMode, setEditMode] = useState<boolean>(false);
	const [editValue, setEditValue] = useState<string>(props.value);

	return (
		<div className={'editable-text-field'}>
			{ !editMode ? (
				<div>
					<span className={'editable-text-field-text'}>{ props.value }</span>
					<Button text={'Edit'} onClick={ () => setEditMode(true) } />
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