import PropTypes from 'prop-types';

export default function Banner ({bannerTitle, bgbanner, bgurl}) {
	return (
		<div className="banner">
			<img src={bgurl} alt="" />
			<h2 style={bgbanner}>{bannerTitle}</h2>
		</div>
	);
}

Banner.propTypes = {
	bannerTitle: PropTypes.string,
	bgbanner: PropTypes.object,
	bgurl: PropTypes.string
}