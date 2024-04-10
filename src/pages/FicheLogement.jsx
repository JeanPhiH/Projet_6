import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';
import Error404 from "../pages/Error404";

export default function FicheLogement ({listLogements}) {
	const logId = useParams();
	const idLogement = listLogements.find(log => log.id === logId.id);
	return (
		<>
			{!idLogement ? <Error404 /> : (
				<>
					<Carousel key={idLogement.title} idLog={idLogement.id} titleId={idLogement.title} picturesId={idLogement.pictures}/>
					<Details key={idLogement.location} titleId={idLogement.title} locationId={idLogement.location} descriptionId={idLogement.description} hostId={idLogement.host} ratingId={idLogement.rating} equipmentsId={idLogement.equipments} tagsId={idLogement.tags}/>
				</>
				)
			}
			
		</>
	);
}

FicheLogement.propTypes = {
	listLogements: PropTypes.array
}