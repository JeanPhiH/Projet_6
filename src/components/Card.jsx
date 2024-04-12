import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Card ({cover, title, idlog}) {
	return (
		<Link className="card-container" to={`/housingcard/${idlog}`}>
			<figure className="card">
				<img src={cover} alt={title} />
				<figcaption>{title}</figcaption>
			</figure>
		</Link>
	);
}

Card.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	idlog: PropTypes.string
}