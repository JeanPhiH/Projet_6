import { Link } from "react-router-dom";

export default function Error404 () {
	return (
		<div className="error404">
			<h2 className="title404">404</h2>
			<p className="p404">Oups! La page que vous demandez n’existe pas.</p>
			<Link to="/" className="link404">Retourner sur la page d’accueil</Link>
		</div>
	);
}