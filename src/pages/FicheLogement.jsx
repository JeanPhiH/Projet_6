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
			{!isLogement && <Error404 key="error404"/>}
			{listLogements.map((logement) => {
				if (logement.id === logId.id) {
					return (
						<>
							<Carousel key={logement.title} idLog={logement.id} titleId={logement.title} picturesId={logement.pictures}/>
							<Details key={logement.location} titleId={logement.title} locationId={logement.location} descriptionId={logement.description} hostId={logement.host} ratingId={logement.rating} equipmentsId={logement.equipments} tagsId={logement.tags}/>
						</>
					)
				}
			})}
		</>
	);
}

FicheLogement.propTypes = {
	listLogements: PropTypes.array
}