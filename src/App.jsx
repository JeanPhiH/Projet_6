import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousingCard from "./pages/HousingCard";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
	const [listLogements, setListLogements] = useState([]);
	useEffect(() => {
		fetch("/assets/logements.json")
		.then((response) => response.json())
		.then((jsonData) => {
			setListLogements(jsonData);
		})
	}, []);

  return (
    <>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home listLogements={listLogements} />} />
					<Route path="/housingcard/:id" element={<HousingCard listLogements={listLogements}/>} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
			<Footer />
		</>
  );
}
