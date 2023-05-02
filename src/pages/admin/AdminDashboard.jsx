import React from "react";
import { FaUserInjured } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { SiEditorconfig } from "react-icons/si";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useState } from "react";
function AdminDashboard() {
	const [photo, setPhoto] = useState();
	const [bannerHeading, setBannerHeading] = useState();
	const [bannerDes, setBannerDes] = useState();
	const [WhatHeading, setWhatHeading] = useState();
	const [whatDes, setWhatDes] = useState();
	const [howHeading, setHowHeading] = useState();
	const [howDes, setHowDes] = useState();
	const [whyHeading, setWhyHeading] = useState();
	const [whyDes, setWhyDes] = useState();

	// create service api

	const createHandler = (e) => {
		e.preventDefault();
	};
	const data = [
		{
			link: "Overview",
			path: "/",
			icon: <BsFillGrid3X3GapFill />,
		},
		{
			link: "View Service",
			path: "/",
			icon: <ImEye />,
		},
		{
			link: "Edit Service",
			path: "/",
			icon: <SiEditorconfig />,
		},
		{
			link: "View Industry",
			path: "/",
			icon: <ImEye />,
		},
		{
			link: "Edit Industry",
			path: "/",
			icon: <SiEditorconfig />,
		},
		{
			link: "Logout",
			path: "/",
			icon: <IoLogOutOutline />,
		},
	];
	const [auth] = useAuth();
	return (
		<section className="admin-dashboard flex gap-6 p-10">
			{/* left side bar */}
			<div className="col flex-[20%] shadow-lg p-4 border">
				<figure className="flex-center">
					<span className="text-[5rem] mb-6">
						<FaUserInjured />
					</span>
					<h2> {auth?.user?.username}</h2>
				</figure>

				<aside className="my-16 flex justify-center">
					<ul>
						{data.map((val, index) => {
							return (
								<li className="mb-12" key={index}>
									<Link to={val.path} className="flex items-center gap-2 text-[1.3rem]">
										<span>{val.icon}</span>
										<span className="hidden md:block">{val.link}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</aside>
			</div>

			<div className="col flex-[80%]">
				<h2 className="mb-6">Add Services</h2>
				<form action="" onSubmit={createHandler}>
					<div className="flex items-center gap-4 border-b mb-6">
						<div className="form-group flex-[70%] ">
							<input
								type="text"
								placeholder="Fill Banner Heading"
								className="w-full py-2 px-2"
								value={bannerHeading}
								onChange={(e) => setBannerHeading(e.target.value)}
							/>
						</div>
						<div className="form-group px-4 cursor-pointer ">
							<label htmlFor="" className="cursor-pointer">
								{photo ? photo.name : "Upload Photo"}
								<input
									type="file"
									hidden
									accept="image/*"
									value={photo}
									onChange={(e) => setPhoto(e.target.files[0])}
									multiple
								/>
							</label>
						</div>
					</div>

					<div className="form-group border-b mb-6">
						<textarea
							placeholder="Fill Banner Description"
							className="w-full py-3 px-2"
							value={bannerDes}
							onChange={(e) => setBannerDes(e.target.value)}
						></textarea>
					</div>

					<div className="flex items-center gap-4 border-b mb-6">
						<div className="form-group flex-[70%]">
							<input
								type="text"
								placeholder="Fill What Heading"
								className="w-full py-2 px-2"
								value={WhatHeading}
								onChange={(e) => setWhatHeading(e.target.value)}
							/>
						</div>
						<div className="form-group px-4 cursor-pointer ">
							<label htmlFor="" className="cursor-pointer">
								{photo ? photo.name : "Upload Photo"}
								<input
									type="file"
									hidden
									accept="image/*"
									value={photo}
									onChange={(e) => setPhoto(e.target.files[0])}
								/>
							</label>
						</div>
					</div>

					<div className="form-group border-b mb-6">
						<textarea
							placeholder="Fill What Description"
							className="w-full py-3 px-2"
							value={whatDes}
							onChange={(e) => setWhatDes(e.target.value)}
						></textarea>
					</div>

					<div className="flex items-center gap-4 border-b mb-6">
						<div className="form-group flex-[70%]">
							<input
								type="text"
								placeholder="Fill Why Heading"
								className="w-full py-2 px-2"
								value={whyHeading}
								onChange={(e) => setWhyHeading(e.target.value)}
							/>
						</div>
						<div className="form-group px-4 cursor-pointer">
							<label htmlFor="" className="cursor-pointer">
								{photo ? photo.name : "Upload Photo"}
								<input
									type="file"
									hidden
									accept="image/*"
									value={photo}
									onChange={(e) => setPhoto(e.target.files[0])}
								/>
							</label>
						</div>
					</div>

					<div className="form-group border-b mb-6">
						<textarea
							placeholder="Fill Why Description"
							className="w-full py-3 px-2"
							value={whyDes}
							onChange={(e) => setWhyDes(e.target.value)}
						></textarea>
					</div>

					<div className="flex items-center gap-4 border-b mb-6">
						<div className="form-group flex-[70%]">
							<input
								type="text"
								placeholder="Fill How Heading"
								className="w-full py-2 px-2"
								value={howHeading}
								onChange={(e) => setHowHeading(e.target.value)}
							/>
						</div>
						<div className="form-group px-4 ">
							<label htmlFor="" className="cursor-pointer">
								{photo ? photo.name : "Upload Photo"}
								<input
									type="file"
									hidden
									accept="image/*"
									value={photo}
									onChange={(e) => setPhoto(e.target.files[0])}
								/>
							</label>
						</div>
					</div>

					<div className="form-group border-b mb-6">
						<textarea
							placeholder="Fill How Description"
							className="w-full py-3 px-2"
							value={howDes}
							onChange={(e) => setHowDes(e.target.value)}
						></textarea>
					</div>

					<div className="cta text-center">
						<button>Add Services</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default AdminDashboard;
