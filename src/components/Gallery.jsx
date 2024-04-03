import Card from "./Card";
import PropTypes from 'prop-types';

export default function Gallery ({listLogements}) {
	
	return (
		<div className="gallery">
			{listLogements.map((logement) => (
				<Card key={logement.id} cover={logement.cover} title={logement.title} idlog={logement.id} />
			))}
		</div>
	);
}

Gallery.propTypes = {
	listLogements: PropTypes.array
}