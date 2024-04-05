import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Collapse ({titleCollapse, descriptionCollapse}) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapse = () => setIsOpen(!isOpen);
	return (
		<div className="collapse">
			<h3 className="title-collapse" onClick={toggleCollapse}>{titleCollapse}</h3>
			{isOpen ? 
				<p className="description-collapse" >{descriptionCollapse}</p>
			: null}
		</div>
	);
}

Collapse.propTypes = {
	titleCollapse: PropTypes.string,
	descriptionCollapse: PropTypes.string
}