import React from "react";
import styled from "styled-components";

function ServicesBanner() {
	return (
		<ServicesWrapper className="grid-2 items-center p-8 mb-60 lg:mb-0">
			<div className="col">
				<span>Trusted by 500+ Clients</span>
				<h1>Data</h1>
				<p className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit animi a. Veritatis,
					assumenda. Ex temporibus
				</p>
				<div className="btn mt-4">
					<button className="cta">Explore</button>
				</div>
			</div>
			<div className="col">
				<form className="border shadow-lg p-6 rounded-md ">
					<div className="form-group">
						<select required>
							<option value="looking for job">I'm Looking for job</option>
							<option value="virtual assistant">Virtual Assistant</option>
							<option value="non virtual assistant">Non Virtual Assistant</option>
						</select>
					</div>

					<div className="form-group">
						<input type="text" placeholder="Enter your name" required />
					</div>

					<div className="form-group">
						<input type="email" placeholder="Enter your email" required />
					</div>

					<div className="form-group">
						<textarea placeholder="Tell us the work that you want to persue" required></textarea>
					</div>

					<div className="cta text-center">
						<button>Apply Now</button>
					</div>
				</form>
			</div>
		</ServicesWrapper>
	);
}

const ServicesWrapper = styled.section`
	height: 80vh;
	width: 100%;
	.form-group {
		margin-bottom: 2rem;
		input,
		textarea,
		select {
			width: 100%;
			padding: 1rem 0.5rem;
			border-bottom: 1px solid var(--grayColor);
		}
	}
`;

export default ServicesBanner;
