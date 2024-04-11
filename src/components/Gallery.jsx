import Card from "./Card";
import PropTypes from 'prop-types';

export default function Gallery ({listHousings}) {
	
	return (
		<div className="gallery">
			{listHousings.map((housing) => (
				<Card key={housing.id} cover={housing.cover} title={housing.title} idlog={housing.id} />
			))}
		</div>
	);
}

Gallery.propTypes = {
	listHousings: PropTypes.array
}