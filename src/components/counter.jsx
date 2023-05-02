import React from "react";
import styled from "styled-components";

function counter() {
	const data = [
		{
			score: 10,
			heading: "SUCCESS RATE",
		},

		{
			score: 90,
			heading: "HAPPY CLIENTS",
		},

		{
			score: 55,
			heading: "SATISFACTION RATE",
		},
	];
	return (
		<CounterWrapper className=" grid-3">
			{data.map((val, index) => {
				return (
					<div className="card text-center" key={index}>
						<h2>{val.score}</h2>
						<p>{val.heading}</p>
					</div>
				);
			})}
		</CounterWrapper>
	);
}

const CounterWrapper = styled.section`
	.card {
		background: var(--primaryColor);
		position: relative;
		height: 100%;
		width: 100%;
		padding: 3rem;
		color: var(--whiteColor);
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			background: var(--secondryColor);
			width: 100%;
			height: 10%;
			transform: rotate(5deg);
			animation: counter 0.5s linear infinite;
		}

		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			background: var(--secondryColor);
			width: 100%;
			height: 10%;
			transform: rotate(-5deg);
			animation: counter 0.5s linear infinite;
		}
	}
`;

export default counter;
