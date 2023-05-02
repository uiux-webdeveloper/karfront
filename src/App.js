import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
	Home,
	About,
	Login,
	SingleService,
	Industries,
	SingleIndustry,
	Services,
	Looking4Job,
} from "./pages";
import { Footer, Header } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/looking4job" element={<Looking4Job />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/services" element={<Services />} />
				<Route path="/singleservice" element={<SingleService />} />
				<Route path="/industries" element={<Industries />} />
				<Route path="/singleindustry" element={<SingleIndustry />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
