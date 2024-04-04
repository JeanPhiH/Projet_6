import PropTypes from 'prop-types';

export default function Rating({ratingId}) {
	const starCount = [1, 2, 3, 4, 5];
	return (
		<div className="rating">
			{starCount.map((star) => (
				ratingId >= star ? (
					<p className="star-filled" key={star}></p>
					) : (
					<p className="star-empty" key={star}></p>
				)
			))}
		</div>
	)
}

Rating.propTypes = {
	ratingId: PropTypes.string
}