import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
// import Error404 from "../pages/Error404";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FicheLogement ({listLogements}) {
	const navigate = useNavigate();
	const logId = useParams();
	const isLogement = listLogements.find(log => log.id === logId.id);
	return (
		<>
			{!isLogement && navigate('/error404', { replace: true })}
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