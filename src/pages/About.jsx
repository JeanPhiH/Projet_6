import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
// import { useEffect, useState } from "react";
import about from "../../public/assets/about.json";


export default function About () {
	// const [jsonAbout, setJsonAbout] = useState([]);
	const bannerTitle = "";
	const bgbanner = {backgroundColor: "rgba(0, 0, 0, 0.3)"};
	const bgurl= "/assets/image_source_2_1240.webp";
	// useEffect(() => {
	// 	fetch("/assets/about.json")
	// 	.then((response) => response.json())
	// 	.then((jsonData) => {
	// 	setJsonAbout(jsonData);
	// })}, []);
	
	return (
		<>
			<Banner bannerTitle={bannerTitle} bgbanner={bgbanner} bgurl={bgurl}/>
			<div className="apropos">
				{about.map((about) => (
					<Collapse key={about.title} titleCollapse={about.title} descriptionCollapse={about.description} />
				))}
			</div>
		</>
	);
}