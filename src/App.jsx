import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/APropos";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function App() {
	const [listLogements, setListLogements] = useState([])
	useEffect(() => {
		fetch("/src/json/logements.json")
		.then((response) => response.json())
		.then((jsonData) => {
			setListLogements(jsonData);
		})
	}, []);
	console.log("App: ", listLogements)

  return (
    <>
			<Header />
			<Routes>
				<Route path="/" element={<Home listLogements={listLogements}/>} />
				<Route path="/fiche-logement/:id" element={<FicheLogement listLogements={listLogements}/>} />
				<Route path="/a-propos" element={<APropos />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</>
  );
}
