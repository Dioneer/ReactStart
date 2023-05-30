import './input.css'

function Inputs(props) {

	const addVarProp = () => { if (props.act) { return 'active' } else return '' }

	return (
		<input
			type={props.type}
			data-value={props.dataValue || ''}
			value={props.value}
			placeholder={props.place}
			autoComplete="off"
			name={props.name}
			className={["input", addVarProp()].join(' ')}
			onFocus={() => props.focus()}
			onBlur={() => props.blur()}
			onChange={(e) => { props.onchange(e) }}
			onKeyUp={(e) => { props.onkey(e) }} />
	)
}

export default Inputs;