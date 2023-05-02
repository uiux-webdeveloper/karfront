import React from "react";
import { Banner, Selection, Help, Blog, HomeTestimonial, Counter } from "../components";

function Home() {
	return (
		<>
			<Banner />
			<Counter />
			<Selection />
			<Help />
			<Blog />
			<HomeTestimonial />
		</>
	);
}

export default Home;
