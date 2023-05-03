import PropTypes from "prop-types"

const styleLi = {
	li: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 0 15px 0',
	},
	span: {
		display: 'block',
		margin: '0 15px',
	},
	button: {
		display: 'flex',
		height: '50px',
		padding: '0px 20px',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '1rem',
		color: '#333',
		textTransform: 'uppercase',
		margin: '0 0 0 15px',
	}
}

function ToDoLi({ text, index }) {
	return (
		<li style={styleLi.li}>
			<div className="checkbox">
				<label htmlFor="formcheck" className="checkbox__lable"><span></span></label>
				<input type="checkbox" id="formcheck" data-error="ошибка" autoComplete="off" name="checkyourself" className="checkbox__input firstblock req" /></div>
			<span style={styleLi.span}>{index + 1}</span>{text.id}
			<button style={styleLi.button} type="submit">X</button>
		</li>
	)
}

ToDoLi.propTypes = {
	text: PropTypes.object.isRequired,
	index: PropTypes.number,
}

export default ToDoLi;