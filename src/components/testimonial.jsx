import { React, useState } from "react";
import styled from "styled-components";
import pic1 from "../images/testimonial/pic1.png";
import pic2 from "../images/testimonial/pic2.png";
import pic3 from "../images/testimonial/pic3.png";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Testimonial() {
	const data = [
		{
			image: pic1,
			name: "Kevin Obrian",
			address: "USA",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iure aut id doloribusratione eum, libero",
		},

		{
			image: pic2,
			name: "Json Obrian",
			address: "USA",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iure aut id doloribusratione eum, libero",
		},

		{
			image: pic3,
			name: "Auniyo Obrian",
			address: "Tornado",
			des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iure aut id doloribusratione eum, libero",
		},
	];

	const [selected, setSelected] = useState(0);
	const length = data.length;
	const transition = { type: "spring", duration: 1 };
	const prev = () => {
		selected === 0 ? setSelected(length - 1) : setSelected((prev) => prev - 1);
	};

	const next = () => {
		selected === length - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
	};

	return (
		<HomeTestimonialWrapper className="grid-2 my-20">
			<div className="testimonial">
				<div className="heading-responsive">
					<h2>Customers Testimonial</h2>
					<p className="mt-2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iure aut id doloribus
						ratione eum, libero
					</p>
				</div>

				<div className="row flex-center mt-16">
					<div className="col text-center">
						<div className="img-box flex-center mb-4">
							<motion.img
								src={data[selected].image}
								key={selected}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={transition}
								className="w-[170px] lg:w-[220px] "
								alt=""
							/>
						</div>

						<article className="space-y-4">
							<h3>{data[selected].name}</h3>
							<h4>{data[selected].address}</h4>
							<p>{data[selected].des}</p>
						</article>

						<div className="arrows">
							<span className="prev" onClick={prev}>
								<BsChevronDoubleLeft />
							</span>
							<span className="next" onClick={next}>
								<BsChevronDoubleRight />
							</span>
						</div>
					</div>
				</div>
			</div>

			<form action="" className="p-8">
				<div className="heading center">
					<h2>Reach Out to us</h2>
				</div>
				<div className="row grid-2">
					<div className="col">
						<input type="text" placeholder="Enter Your First Name" className="w-full" />
					</div>
					<div className="col">
						<input type="text" placeholder="Enter Your Last Name" className="w-full" />
					</div>
				</div>

				<div className="row grid-1">
					<div className="col">
						<input type="text" placeholder="Enter Your Email" className="w-full" />
					</div>
				</div>

				<div className="row grid-1">
					<div className="col">
						<input type="text" placeholder="Enter Your Phone number" className="w-full" />
					</div>
				</div>
				<div className="row grid-1">
					<div className="col">
						<textarea placeholder="Message" className="w-full" />
					</div>
				</div>
				<div className="row grid-1 mb-8">
					<div className="col">
						<button className="cta-2 w-full">Contact us</button>
					</div>
				</div>
			</form>
		</HomeTestimonialWrapper>
	);
}

const HomeTestimonialWrapper = styled.section`
	form {
		min-height: 400px;
		min-width: 90%;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		border-radius: 5px;
		input,
		textarea {
			outline: none;
			border-bottom: 1px solid var(--grayColor);
			margin-bottom: 2rem;
		}

		h2 {
			font-weight: 600;
			color: var(--secondryColor);
		}
	}

	margin: 2rem 0;
	.row {
		.col {
			position: relative;
			.img-box {
				position: relative;
				&::before {
					content: "";
					position: absolute;
					top: 39%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 210px;
					height: 210px;
					z-index: -1;
					background: var(--primaryColor);
					border-radius: 80%;
				}
			}

			.arrows {
				span {
					background: var(--primaryColor);
					color: var(--whiteColor);
					padding: 1rem;
					border-radius: 50%;
					font-weight: 700;
					position: absolute;
					z-index: 100;
					top: 25%;
					cursor: pointer;
				}
				.prev {
					left: 0;
				}
				.next {
					right: 0;
				}
			}
		}
	}
`;
export default Testimonial;
