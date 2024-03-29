import "./styles/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/APropos";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/fiche-logement/:id" element={<FicheLogement />} />
				<Route path="/a-propos" element={<APropos />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
  );
}

export default App;
