import * as React from 'react';
import './EditableListField.css';
import {useState} from "react";
import {Button} from "../Button/Button";

export function EditableListField(props: {
	caption: string;
	value: any;
	list: any[];
	onSelect: (value: any) => unknown;
}): JSX.Element {

	const [editMode, setEditMode] = useState(false);
	const [selected, setSelected] = useState(props.value);

	return (
		<div>
			{
				!editMode ? (
					<div>
						<span className={'editable-list-field-text'}>{props.caption} { props.value['name'] }</span>
						<Button text={'✏️'} onClick={ () => setEditMode(true)} borderless />
					</div>
				) : (
					<div className={'editable-list-field-edit'}>
						<select
							className={'editable-list-field-select'}
							onChange={(value) => setSelected(value.target.value)}
						>
							{
								props.list.map((entry, index) => <option className={'editable-list-field-option'} key={index}>{ entry['name'] }</option>)
							}
						</ select>
						<Button text={'Save'} onClick={ () => {
							for (const entry of props.list) {
								if (entry.name === selected) {
									props.onSelect(entry);
									break;
								}
							}
							setEditMode(false);
						} } />
					</div>
				)
			}
		</div>
	);
}