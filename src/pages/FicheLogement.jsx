import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
import Error404 from "../pages/Error404";

export default function FicheLogement ({listLogements}) {
	const logId = useParams();
	const isLogement = listLogements.find(log => log.id === logId.id);
	return (
		<>
			{!isLogement ? <Error404 /> : (
			listLogements.map((logement, index) => (
				(logement.id === logId.id) ? (
					<>
						<Carousel key={`${logement.title}-${index}`} idLog={logement.id} titleId={logement.title} picturesId={logement.pictures}/>
						<Details key={`${logement.location}-${index}`} titleId={logement.title} locationId={logement.location} descriptionId={logement.description} hostId={logement.host} ratingId={logement.rating} equipmentsId={logement.equipments} tagsId={logement.tags}/>
					</>
					) : undefined
				))
			)}
		</>
	);
}

FicheLogement.propTypes = {
	listLogements: PropTypes.array
}