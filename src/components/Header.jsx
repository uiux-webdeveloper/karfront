import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { GrFormClose } from "react-icons/gr";

function Header() {
	const [bar, setbar] = useState(false);
	const barHandler = () => {
		setbar(!bar);
	};

	return (
		<HeaderWrapper className="flex-between">
			<div className="logo">
				<Link to="/">Karyarth</Link>
			</div>

			<ul className={`flex gap-8 items-center ${bar && "mobile"}`}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/">Services</Link>
				</li>

				<li>
					<Link to="/">Industry</Link>
				</li>

				<li>
					<Link to="/" className="cta-2">
						Connect
					</Link>
				</li>
			</ul>

			<div className="hamberger" onClick={barHandler}>
				{bar ? <HiBars3CenterLeft className="bar" /> : <GrFormClose className="bar" />}
			</div>
		</HeaderWrapper>
	);
}

const HeaderWrapper = styled.header`
	box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
	padding: 15px 4%;
	z-index: 1000;
	position: fixed;
	width: 100%;
	background: var(--whiteColor);

	.bar {
		font-size: 2rem;
		cursor: pointer;
	}
	.hamberger {
		display: none;
	}
	.mobile {
		margin-top: -50rem;
	}

	@media screen and (max-width: 768px) {
		ul {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 100%;
			right: 0%;
			z-index: 10;
			background: var(--primaryColor);
			width: 50%;
			height: 20rem;
			transition: all 0.5s ease;
			border-radius: 20px;

			li {
				line-height: 1rem;
				color: var(--whiteColor);
			}
		}
		.hamberger {
			display: block;
		}
	}
`;

export default Header;
