import PropTypes from 'prop-types';
import Rating from "./Rating";
import Collapse from "./Collapse";
import Tags from "./Tags";

export default function Details({idHousing}) {
	const firstName = idHousing.host.name.split(" ")[0];
	const lastName = idHousing.host.name.split(" ")[1];
	return (
		<>
			<div className="details-container">
				<div className="details-title">
					<h2 className="title">{idHousing.title}</h2>
					<p className="location">{idHousing.location}</p>
					<Tags tagsId={idHousing.tags} />
				</div>
				<div className="details-host">
					<div className="host">
						<div className="host-name">
							<p>{firstName}</p>
							<p>{lastName}</p>
						</div>
						<img className="host-picture"src={idHousing.host.picture} alt={idHousing.host.name} />
					</div>
					<Rating ratingId={idHousing.rating} />
				</div>
			</div>
			<div className="details-collapse">
				<Collapse titleCollapse="Description" descriptionCollapse={idHousing.description} />
				<Collapse titleCollapse="Équipements" equipementsCollapse={idHousing.equipments.map((equipement, index) => (
							<li key={index}>{equipement}</li>
							))} />
			</div>
		</>
	)
}

Details.propTypes = {
	idHousing: PropTypes.object
}