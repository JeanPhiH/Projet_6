import PropTypes from 'prop-types';

export default function Rating({ratingId}) {
	const starCount = [1, 2, 3, 4, 5];
	return (
		<div className="rating">
			{starCount.map((star, index) => (
				ratingId >= star ? (
					<p className="star-filled" key={`${star}-${index}`}>{star}</p>
					) : (
					<p className="star-empty" key={`${star}-${index+1000}`}></p>
				)
			))}
		</div>
	)
}

Rating.propTypes = {
	ratingId: PropTypes.string
}