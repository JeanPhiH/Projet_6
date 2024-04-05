import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CollapseEq ({titleCollapse, equipementsCollapse}) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapse = () => setIsOpen(!isOpen);
	return (
		<div className="collapse">
			<h3 className="title-collapse">{titleCollapse}</h3>
			{isOpen ? 
				<>
					<img onClick={toggleCollapse} className="arrow-down"src="/src/assets/arrow-right.png" />
					<ul className="description-collapse">
						{equipementsCollapse.map((equipement, index) => (
						<li key={index}>{equipement}</li>
						))}
					</ul>
				</>
			: <img onClick={toggleCollapse} className="arrow-up" src="/src/assets/arrow-right.png" />}
		</div>
	);
}

CollapseEq.propTypes = {
	titleCollapse: PropTypes.string,
	equipementsCollapse: PropTypes.array
}