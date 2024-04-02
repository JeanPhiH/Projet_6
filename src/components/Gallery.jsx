import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gallery () {
	const [listLogements, setListLogements] = useState([])
	useEffect(() => {
		fetch("/src/json/logements.json")
		.then((response) => response.json())
		.then((jsonData) => {
			setListLogements(jsonData);
		})
	}, []);
	return (
		<div className="gallery">
			{listLogements.map((logement) => (
				<Card key={logement.id} cover={logement.cover} title={logement.title} idlog={logement.id} />
			))}
		</div>
	);
}