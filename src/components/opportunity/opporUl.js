import OpportLi from './opporLi.js';
import '../opportunity/opportunity.css';

function OppurtUl() {

	return (
		< ul className="aside__list pt-[20%]" >
			{
				["archive", 'second', 'third'].map((li, i) => {
					return <OpportLi
						key={i}
						text={li}
					></OpportLi>
				})
			}
		</ ul>
	)
}

export default OppurtUl;