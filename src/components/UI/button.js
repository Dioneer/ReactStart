import './button.css';

function Button(props) {

	const addVarProp = () => { if (props.dis) { return 'disabled' } else return '' }

	return (
		<button
			className={["button", props.aux, addVarProp()].join(' ')}
			type={props.type}
			onClick={props.click}>
			<span>{props.title}</span>
		</button>
	)
}
export default Button;