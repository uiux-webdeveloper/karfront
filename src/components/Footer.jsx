import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImFacebook, ImInstagram, ImTwitter, ImLinkedin } from "react-icons/im";
function Footer() {
	const data = {
		resources: [
			{ name: "Employees", path: "/" },
			{ name: "invoice", path: "/" },
			{ name: "Job Seekers", path: "/" },
			{ name: "Signin", path: "/" },
		],
		legal: [
			{ name: "Fraud", path: "/" },
			{ name: "Government Policy", path: "/" },
			{ name: "Privacy Policy", path: "/" },
			{ name: "Tern of use", path: "/" },
		],
		specification: [
			{ name: "Finance", path: "/" },
			{ name: "Technology", path: "/" },
			{ name: "Market", path: "/" },
			{ name: "Legal", path: "/" },
		],
	};
	return (
		<FooterWrapper>
			<div className="row grid-4 place-content-center px-12 py-8 text-center lg:text-left">
				<div className="col flex justify-center">
					<ul>
						<h3>
							<Link to="">Karyarth</Link>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error hic nihil natus,
							quidem doloremque
						</p>
						<div className="socials flex gap-10 lg:gap-16 mt-8">
							<Link to="">
								<ImFacebook />
							</Link>

							<Link to="">
								<ImInstagram />
							</Link>

							<Link to="">
								<ImTwitter />
							</Link>

							<Link to="">
								<ImLinkedin />
							</Link>
						</div>
					</ul>
				</div>

				<div className="col flex justify-center">
					<ul>
						<h3>Resources</h3>
						{data.resources.map((val, index) => {
							return (
								<li key={index}>
									<Link to={val.path}>{val.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="col flex justify-center">
					<ul>
						<h3>Legal</h3>
						{data.legal.map((val, index) => {
							return (
								<li key={index}>
									<Link to={val.path}>{val.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="col flex justify-center">
					<ul>
						<h3>Specifications</h3>
						{data.specification.map((val, index) => {
							return (
								<li key={index}>
									<Link to={val.path}>{val.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="copyright border-t p-4 text-center">
				<p>Copyright claim@02023-24 Karyarth</p>
			</div>
		</FooterWrapper>
	);
}

const FooterWrapper = styled.footer`
	background: var(--bgColor);

	li {
		font-weight: 300;
		a {
			color: var(--blackColor);
		}
	}
	h3,
	li {
		line-height: 2.5rem;
		color: var(--secondryColor);
	}

	.socials {
		a {
			box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px,
				rgba(17, 17, 26, 0.1) 0px 24px 80px;
			padding: 1rem;
			border-radius: 50%;
			transition: all 0.5s ease;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
`;
export default Footer;
