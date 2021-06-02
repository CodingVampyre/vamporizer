import * as React from 'react';
import './EditableListField.css';
import {useState} from "react";
import {Button} from "../Button/Button";

export function EditableListField(props: {
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
						<span>Clan: { props.value['name'] }</span>
						<Button text={'Edit'} onClick={ () => setEditMode(true)} />
					</div>
				) : (
					<div>
						<select onChange={(value) => setSelected(value.target.value)}>
							{
								props.list.map((entry, index) => <option key={index}>{ entry['name'] }</option>)
							}
						</ select>
						<Button text={'Save'} onClick={ () => {
							props.onSelect(selected);
							setEditMode(false);
						} } />
					</div>
				)
			}
		</div>
	);
}