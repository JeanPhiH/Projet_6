import { NavLink } from "react-router-dom";

export default function Card ({cover, title, idlog}) {
	return (
		<NavLink className="card-container" to={`/fiche-logement/${idlog}`}>
			<figure className="card">
				<img src={cover} alt={title} />
				<figcaption>{title}</figcaption>
			</figure>
		</NavLink>
	);
}