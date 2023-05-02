import React from "react";
import bg2 from "../../images/bg-2.jpg";
import styled from "styled-components";
import { BsFillBrightnessLowFill } from "react-icons/bs";
function looking4Job() {
	return (
		<Banner4Job className="flex flex-col justify-center pl-4">
			<div className="left text-white">
				<h1 className="mb-4">Find New Opportunities Faster</h1>
				<h3>
					<span>
						<BsFillBrightnessLowFill />
					</span>
					Start your job search below
				</h3>
				<h3>
					<span>
						<BsFillBrightnessLowFill />
					</span>
					Filter by remote roles, location, specialization and more{" "}
				</h3>
				<h3>
					<span>
						<BsFillBrightnessLowFill />
					</span>
					Apply!
				</h3>
			</div>
		</Banner4Job>
	);
}

const Banner4Job = styled.section`
	background: url(${bg2});
	height: 50vh;
	width: 100%;
	background-size: cover;
	background-position: top center
	color: var(--whiteColor);

	h3{
		display:flex;
		align-items: center;
		span{
			color:var(--primaryColor);
		}
	}
`;

export default looking4Job;
