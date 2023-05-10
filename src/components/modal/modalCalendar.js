import React from "react";
import './modal.css';
import Calendar from '../calendar/calendar.js';

export default class ModalCalendar extends React.Component {
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
							<Calendar></Calendar>
						</div>
					</div>
				</div>
			</React.Fragment >
		)
	}
}
