//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));

let counter = 0;
setInterval(function () {
	const mil = Math.floor(counter / 1000);
	const cen = Math.floor(counter / 100);
	const dec = Math.floor(counter / 10);
	const uni = Math.floor(counter / 1);

	//render your react application
	root.render(<Home mil={mil} cen={cen} dec={dec} uni={uni} />);

	root.render(
		<SecondsCounter mil={mil} cen={cen} dec={dec} uni={uni} />
	);

	counter++;
}, 1000);

