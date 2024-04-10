import PropTypes from 'prop-types';
import Rating from "./Rating";
import Collapse from "./Collapse";
import Tags from "./Tags";

export default function Details({titleId, locationId, descriptionId, hostId, ratingId, equipmentsId, tagsId}) {
	const firstName = hostId.name.split(" ")[0];
	const lastName = hostId.name.split(" ")[1];
	return (
		<>
			<div className="details-container">
				<div className="details-title">
					<h2 className="title">{titleId}</h2>
					<p className="location">{locationId}</p>
					<Tags tagsId={tagsId} />
				</div>
				<div className="details-host">
					<div className="host">
						<div className="host-name">
							<p>{firstName}</p>
							<p>{lastName}</p>
						</div>
						<img className="host-picture"src={hostId.picture} alt={hostId.name} />
					</div>
					<Rating ratingId={ratingId} />
				</div>
			</div>
			<div className="details-collapse">
				<Collapse titleCollapse="Description" descriptionCollapse={descriptionId} />
				<Collapse titleCollapse="Équipements" equipementsCollapse={equipmentsId.map((equipement, index) => (
							<li key={index}>{equipement}</li>
							))} />
			</div>
		</>
	)
}

Details.propTypes = {
	titleId: PropTypes.string,
	locationId: PropTypes.string,
	descriptionId: PropTypes.string,
	hostId: PropTypes.object,
	ratingId: PropTypes.string,
	equipmentsId: PropTypes.array,
	tagsId: PropTypes.array
}