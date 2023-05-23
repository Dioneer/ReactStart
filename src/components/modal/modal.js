import React, { useState } from "react";
import './modal.scss'
import classnames from 'classnames';
import { Link } from "react-router-dom";

function Modal({ children, title }) {
	const [isOpen, setIsOpen] = useState(false)

	function missClick(e) {
		if (!e.target.closest('.calendar') && !e.target.closest('.canvas') && !e.target.closest('.button-popup-canvas')) {
			setIsOpen(isOpen => !isOpen);
			document.body.classList.remove('lock')
		}
	}

	function isOpenPopup() {
		setIsOpen(isOpen => !isOpen);
		document.body.classList.add('lock')
	}

	return (
		<React.Fragment>
			<button
				className={["button button__popup", "button__popup-" + title].join(' ')}
				type="button"
				onClick={isOpenPopup}>
				<span>{title}</span>
			</button>
			<div className={classnames("popup", { popup_show: isOpen })}>
				<div className="popup__body"
					onClick={(e) => { missClick(e) }}>
					<div className={["popup__content", 'popup__content-' + title].join(' ')}>
						<Link to="/"
							className="popup__close"
							onClick={(e) => { e.preventDefault(); }}></Link>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment >
	)
}
export default Modal;