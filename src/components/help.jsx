import React from "react";
import { BsCalculator } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { MdBiotech } from "react-icons/md";
import { TbEqualNot } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Help() {
	const data = [
		{
			title: "Finance & Accounting",
			icons: <BsCalculator />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Customer Support",
			icons: <BiHeadphone />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Technology",
			icons: <MdBiotech />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Marketing & Creative",
			icons: <HiLightBulb />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Legal",
			icons: <TbEqualNot />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
		{
			title: "Legal",
			icons: <TbEqualNot />,
			description:
				"Accounting and accounts payable clerks, senior accountants, controllers, and more",
		},
	];
	return (
		<HelpWrapper>
			<h3 className="center">
				Whether you need to find top talent, your next great job opportunity or a consulting
				solution for managing your business and resourcing challenges, we can help.
			</h3>

			<div className="grid-3 card-container mt-4">
				{data.map((val, index) => {
					return (
						<div className="card" key={index}>
							<figure>{val.icons}</figure>
							<div className="card-body">
								<h3>{val.title}</h3>
								<p>{val.description}</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className="service-btn text-center pt-8">
				<Link to="/" className="cta">
					Find An Office
				</Link>
			</div>
		</HelpWrapper>
	);
}

const HelpWrapper = styled.section`
	.card {
		figure {
			background: var(--primaryColor);
			padding: 1rem;
			font-size: 2rem;
			color: var(--secondryColor);
		}
	}
`;

export default Help;
