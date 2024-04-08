import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Collapse ({titleCollapse, descriptionCollapse}) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapse = () => setIsOpen(!isOpen);
	return (
		<div className="collapse">
			<h3 className="title-collapse" >{titleCollapse}</h3>
			{isOpen ? 
				<>
					<img onClick={toggleCollapse} className="arrow-down"src="/src/assets/arrow-right.png" />
					<div className="description-container">
						<p className="description-collapse" >{descriptionCollapse}</p>
					</div>
				</>
			: <img onClick={toggleCollapse} className="arrow-up" src="/src/assets/arrow-right.png" />}
		</div>
	);
}

Collapse.propTypes = {
	titleCollapse: PropTypes.string,
	descriptionCollapse: PropTypes.string
}