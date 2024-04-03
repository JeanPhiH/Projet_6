import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import PropTypes from 'prop-types';

export default function Home ({listLogements}) {
	return (
		
		<main>
			<Banner />
			<Gallery listLogements={listLogements}/>
		</main>
		
	);
}

Home.propTypes = {
	listLogements: PropTypes.array
}