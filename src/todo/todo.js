import ToDoLi from "./todoLi"
import PropTypes from "prop-types"

const ulStyle = {
	listStyle: 'none',
	margin: 0,
	padding: 0,
}

function ToDoList({ textContent }) {
	return (
		<ul className="page__list" style={ulStyle}>
			{textContent.map((text, i) => { return <ToDoLi text={text} key={text.id} index={i}></ToDoLi> })}
		</ul>
	)
}

ToDoList.propTypes = {
	textContent: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ToDoList;