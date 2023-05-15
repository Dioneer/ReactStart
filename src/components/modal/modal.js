import React, { useState } from "react";
import './modal.scss'
import classnames from 'classnames';

function Modal({ children, title }) {
	let [isOpen, setIsOpen] = useState(false)

	function missClick(e) {
		if (!e.target.closest('.calendar') && !e.target.closest('.canvas')) {
			setIsOpen(isOpen = !isOpen);
		}
	}

	return (
		<React.Fragment>
			<button
				className={["button button__popup", "button__popup-" + title].join(' ')}
				type="button"
				onClick={() => { setIsOpen(isOpen = !isOpen); }}>
				<span>{title}</span>
			</button>
			<div className={classnames("popup", { popup_show: isOpen })}>
				<div className="popup__body"
					onClick={(e) => { missClick(e) }}>
					<div className={["popup__content", 'popup__content-' + title].join(' ')}>
						<a href="./"
							className="popup__close"
							onClick={(e) => { e.preventDefault(); }}></a>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment >
	)
}
export default Modal;