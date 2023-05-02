import React from "react";

import pic3 from "../../images/services/pic3.jpg";
function How() {
	const data = [
		{
			title: "MultiTasking Experts",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "efficiency",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
		{
			title: "Save Time",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reprehenderit distinctioblanditiis maxime molestias dolores, architecto repellat necessitatibus quam, fugiat odio",
		},
	];
	return (
		<section className="how-wrapper grid-2 my-12">
			<div className="col">
				<img src={pic3} className="h-full w-full" alt="" />
			</div>
			<div className="col">
				<h2 className="mb-4">Data Analysis</h2>
				<div className="card-containe grid-2">
					{data.map((val, index) => {
						return (
							<div className="card" key={index}>
								<div className="card-body">
									<h3>{val.title}</h3>
									<p>{val.description}</p>
								</div>
							</div>
						);
					})}
				</div>
				<div className="btn mt-4">
					<button className="cta">Get Free Consultancy</button>
				</div>
			</div>
		</section>
	);
}

export default How;
