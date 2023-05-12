import React, { useState } from "react";
import './modal.css';
import classnames from 'classnames';


function Modal({ children, title }) {
	let [isOpen, setIsOpen] = useState(false)

	function setClasses() {
		setIsOpen(isOpen = !isOpen);
	}

	return (
		<React.Fragment>
			<button
				className={["button button__popup", "button__popup-" + title].join(' ')}
				type="button"
				onClick={setClasses}>
				<span>{title}</span>
			</button>
			<div className={classnames("popup", { popup_show: isOpen })} >
				<div className="popup__body">
					<div className={["popup__content", 'popup__content-' + title].join(' ')}>
						<a href="./"
							className="popup__close"
							onClick={(e) => { e.preventDefault(); setClasses() }}></a>
						{children}
					</div>
				</div>
			</div>
		</React.Fragment >
	)
}
export default Modal;