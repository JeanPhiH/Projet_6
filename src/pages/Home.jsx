import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import PropTypes from 'prop-types';

export default function Home ({listHousings}) {
	const bannerTitle = "Chez vous, partout et ailleurs";
	const bgbanner = {backgroundColor: "rgba(0, 0, 0, 0.6)"};
	const bgurl = "/assets/image_source_1_1240.webp";
	
	return (
		<>
			<Banner bannerTitle={bannerTitle} bgbanner={bgbanner} bgurl={bgurl}/>
			<Gallery listHousings={listHousings}/>
		</>
	);
}

Home.propTypes = {
	listHousings: PropTypes.array,
}