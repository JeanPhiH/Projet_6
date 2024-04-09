import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Card ({cover, title, idlog}) {
	return (
		<NavLink className="card-container" to={`/fiche-logement/${idlog}`}>
			<figure className="card">
				<img src={cover} alt={title} />
				<figcaption>{title}</figcaption>
			</figure>
		</NavLink>
	);
}

Card.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	idlog: PropTypes.string
}