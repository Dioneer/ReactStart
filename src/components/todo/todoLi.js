import { useState } from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import Label from "./label";
import Image from './image.js';

function ToDoLi({ text, index, changeInputLi, removeLi }) {
	const classes = [];
	const [lineThrought, setLineThrought] = useState('');
	if (text.completed) {
		classes.push(true)
	}

	function addclass() {
		if (lineThrought) {
			setLineThrought('')
		} else {
			setLineThrought('active')
		}
	}

	return (
		<li>
			<div className={classnames("checkbox", { active: lineThrought })} >
				{text.img === null ?
					<Label text={text} index={index} changeInputLi={changeInputLi} ></Label> : <Image text={text} index={index} changeInputLi={changeInputLi} chCl={addclass}></Image>}
				<input
					defaultChecked={classes[0] || false}
					type="checkbox"
					name={['checkexe', text.id].join('_')}
					id={['formcheck', text.id].join("-")}
					className="checkbox__input"
					value={''} />
			</div>
			<button
				className="button button__li"
				type="button"
				onClick={(e) => { removeLi(text.id) }}><span>X</span>
			</button>
		</li>
	)
}

ToDoLi.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
	changeInputLi: PropTypes.func.isRequired,
}

export default ToDoLi;