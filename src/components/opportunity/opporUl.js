import OpportLi from './opporLi.js';
import '../opportunity/opportunity.css';

function OppurtUl() {
	const list = ["archive", 'second', 'third']

	return (
		<ul className="aside__list pt-[20%]">
			{list.map((li, i) => {
				return <OpportLi
					key={i}
					text={li}
				></OpportLi>
			})}
		</ul>
	)
}

export default OppurtUl;