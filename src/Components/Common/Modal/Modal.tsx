import * as React from 'react';
import './Modal.css';
import {Button} from "../Button/Button";
import {useState} from "react";

function Modal(props: {
	openButtonText: string;
	closeButtonText: string;
	abortButtonText?: string;
	children?: JSX.Element | JSX.Element[];
	onModalConfirm?: () => void;
}): JSX.Element {

	const [modalActive, setModalActive] = useState<boolean>(false);

	return (
		<div className={'modal-wrapper'}>
			<Button text={props.openButtonText} onClick={ () => setModalActive(true) } />
			{
				modalActive &&
					<div className={'modal'}>
						<div className={'modal-background'} />
						<div className={'modal-shell'}>
							<div className={'modal-body'}>
								{ props.children }
								<Button
									text={props.closeButtonText}
									onClick={() => {
										setModalActive(false);
										if (props.onModalConfirm) {
											props.onModalConfirm();
										}
									} }
                                />
								{
									props.abortButtonText &&
									<Button
										text={props.abortButtonText}
										onClick={() => {
											setModalActive(false);
										} }
									/>
								}
							</div>
						</div>
					</div>
			}
		</div>
	)
}

export { Modal }
