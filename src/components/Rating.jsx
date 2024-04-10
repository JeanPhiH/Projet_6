import PropTypes from 'prop-types';

export default function Rating({ratingId}) {
	const starCount = [1, 2, 3, 4, 5];
	return (
		<div className="rating">
			{starCount.map((star) => (
				ratingId >= star ? (
					<div className="star-filled" key={star}></div>
					) : (
					<div className="star-empty" key={star}></div>
				)
			))}
		</div>
	)
}

Rating.propTypes = {
	ratingId: PropTypes.string
}