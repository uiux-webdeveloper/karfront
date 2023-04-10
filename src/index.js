import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Authprovider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Authprovider>
		<App />
	</Authprovider>
);
