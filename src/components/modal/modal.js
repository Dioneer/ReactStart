import React from "react";
import './modal.css';

export default class Modal extends React.Component {
	state = {
		isOpen: '',

	}
	render() {
		return (
			<React.Fragment>
				<button
					className="button button__popup"
					type="button"
					onClick={() => this.setState({ isOpen: 'popup_show' })}>
					<span>calendar</span>
				</button>
				<div className={["popup", this.state.isOpen].join(' ')} >
					<div className="popup__body">
						<div className="popup__content">
							<a href="./"
								className="popup__close"
								onClick={(e) => { e.preventDefault(); this.setState({ isOpen: '' }) }}></a>
							<div className="popup__title">Lorem, ipsum dolor</div>
							<div className="popup__text">Fill the required fields</div>
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}
