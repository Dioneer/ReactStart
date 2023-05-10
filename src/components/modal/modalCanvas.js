import React from "react";
import './modal.css';
import Canvas from "../canvas/canvas";

export default class ModalCanvas extends React.Component {
	state = {
		isOpen: '',
	}

	render() {
		return (
			<React.Fragment>
				<button
					className="button button__popup button-canvas"
					type="button"
					onClick={() => this.setState({ isOpen: 'popup_show' })}>
					<span>Canvas</span>
				</button>
				<div className={["popup", this.state.isOpen].join(' ')} >
					<div className="popup__body">
						<div className="popup__content popup__content-canvas">
							<a href="./"
								className="popup__close"
								onClick={(e) => { e.preventDefault(); this.setState({ isOpen: '' }) }}></a>
							<Canvas></Canvas>
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}
