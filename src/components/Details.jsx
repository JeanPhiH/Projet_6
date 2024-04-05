import PropTypes from 'prop-types';
import Rating from "./Rating";
import Collapse from "./Collapse";
import CollapseEq from "./CollapseEq";

export default function Details({titleId, locationId, descriptionId, hostId, ratingId, equipmentsId, tagsId}) {
	return (
		<>
			<div className="details-container">
				<div className="details-title">
					<h2 className="title">{titleId}</h2>
					<p className="location">{locationId}</p>
					<div className="tags">
						{tagsId.map((tag, index) => (
							<p className="tag"key={index}>{tag}</p>
							))}
					</div>
				</div>
				<div className="details-host">
					<div className="host">
						<p className="host-name">{hostId.name}</p>
						<img className="host-picture"src={hostId.picture} alt={hostId.name} />
					</div>
					<Rating ratingId={ratingId} />
				</div>
			</div>
			<div className="details-collapse">
				<Collapse titleCollapse="Description" descriptionCollapse={descriptionId} />
				<CollapseEq titleCollapse="Équipements" equipementsCollapse={equipmentsId} />
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