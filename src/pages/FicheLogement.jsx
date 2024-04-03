import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Details from "../components/Details";
import PropTypes from 'prop-types';

export default function FicheLogement ({listLogements}) {
	const logId = useParams()
	console.log("logId: ",logId)
	console.log("FicheLogement: ",listLogements)
	return (
		<main>
			{listLogements.map((logement) => {
				if (logement.id === logId.id) {
					return (
						<>
							<Carousel idLog={logement.id} titleId={logement.title} picturesId={logement.pictures}/>
							<Details titleId={logement.title} locationId={logement.location} descriptionId={logement.description} hostId={logement.host} ratingId={logement.rating} equipmentsId={logement.equipments} tagsId={logement.tags}/>
						</>
					)
				}
			})}
		</main>
	);
}

FicheLogement.propTypes = {
	listLogements: PropTypes.array
}