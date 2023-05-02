import React from "react";
import pic1 from "../images/selection/pic1.jpg";
function Selection() {
	return (
		<section className="selection-wrapper">
			<h2 className="center">The Choice is Your We got you Covered</h2>
			<div className="row flex gap-4 items-center">
				<div className="col flex-1 hidden lg:block h-full">
					<img src={pic1} alt="" className="rounded-md h-full" />
				</div>
				<div className="col flex-1">
					<div className="border p-4 mb-6 space-y-4">
						<h3>Hire Remote Talent</h3>
						<p className="leading-[1.8rem]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum dolor sit amet
						</p>
					</div>
					<div className="border p-4 space-y-4">
						<h3>Try Best Way to hire online</h3>
						<p className="leading-[1.8rem]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Perferendis, ducimus Lorem ipsum dolor sit amet
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Selection;
