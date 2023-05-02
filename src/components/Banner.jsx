import React from "react";
import styled from "styled-components";
import bg1 from "../images/bg1.png";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<BannerWrapper className="grid-2 items-center pt-32 lg:pt-10">
			<div className="col left">
				<article className="space-y-6">
					<h1>
						Get Where you're
						<br /> going faster with <span>KARYARTH</span>
					</h1>
				</article>
				<div className="cards flex gap-20 mt-8">
					<span>
						<h3>Find your next hire</h3>
						<Link to="/looking4job" className="cta">
							Req Staff
						</Link>
					</span>

					<span>
						<h3>Find your next job</h3>
						<button className="cta">Get Staff</button>
					</span>
				</div>
			</div>
			<div className="col right">
				<figure>
					<img src={bg1} alt="" className="w-full" />
				</figure>
			</div>
		</BannerWrapper>
	);
}

export default Banner;

const BannerWrapper = styled.section`
	background: var(--bgColor);
	article {
		h1 {
			letter-spacing: 0.6rem;

			span {
				background: var(--secondryColor);
				padding: 0.5rem 0.8rem;
				border-radius: 40px;
				transform: rotateX(-20deg);
				color: var(--whiteColor);
			}
		}
	}
	.left {
		.cards {
			span {
				box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
					rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
					rgb(255, 85, 85) 0px 0px 0px 15px;

				width: 180px;
				height: 180px;
				border-radius: 5px;
				display: grid;
				place-content: center;
				gap: 2rem;
				padding: 1rem;
				text-align: center;

				&:nth-child(1) {
					right: 2%;
					top: 2%;
				}

				&:nth-child(2) {
					left: 2%;
					bottom: 2%;
				}
			}
		}
	}
`;
