import Collapse from "../components/Collapse";
import Banner from "../components/Banner";

export default function About () {
	const bannerTitle = "";
	const bgbanner = {backgroundColor: "rgba(0, 0, 0, 0.3)"};
	const bgurl= "/assets/image_source_2_1240.webp";
	const textFiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
	const textRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
	const textService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.";
	const textSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de securité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la securité domestique pour nos hôtes.";
	return (
		<>
			<Banner bannerTitle={bannerTitle} bgbanner={bgbanner} bgurl={bgurl}/>
			<div className="apropos">
				<Collapse titleCollapse="Fiabilité" descriptionCollapse={textFiabilite} />
				<Collapse titleCollapse="Respect" descriptionCollapse={textRespect} />
				<Collapse titleCollapse="Service" descriptionCollapse={textService} />
				<Collapse titleCollapse="Sécurité" descriptionCollapse={textSecurite} />
			</div>
		</>
	);
}