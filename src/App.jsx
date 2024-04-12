import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HousingCard from "./pages/HousingCard";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
	const [listHousings, setListHousings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch("/assets/logements.json")
		.then((response) => response.json())
		.then((jsonData) => {
			setListHousings(jsonData);
			setIsLoading(false);
		})
	}, []);

  return (
    <>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home listHousings={listHousings} />} />
					<Route path="/housingcard/:id" element={<HousingCard listHousings={listHousings} isLoading={isLoading}/>} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
			<Footer />
		</>
  );
}
