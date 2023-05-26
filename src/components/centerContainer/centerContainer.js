import './center.css';

function CenterContainer({ children }) {
	return (
		<div className="authorization__container">
			<div className="authorization__inputs-container">
				{children}
			</div >
		</div >
	)
}
export default CenterContainer;