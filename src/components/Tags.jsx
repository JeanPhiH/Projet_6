import PropTypes from 'prop-types';

export default function Tags({tagsId}) {
	return (
		<div className="tags">
			{tagsId.map((tag, index) => (
				<p className="tag"key={index}>{tag}</p>
			))}
		</div>
	)
}

Tags.propTypes = {
	tagsId: PropTypes.array
}