//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function SecondsCounter(props) {
	return (<div className="text-center">
		<h1 className="text-center mt-5">Simple Counter</h1>
		<div className="clock col-lg-6 col-12 m-auto">
			<div className="icon rounded-3 bg-dark bg-gradient border border-dark-subtle">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="mil rounded-3 bg-dark bg-gradient border border-dark-subtle">{props.mil % 10}</div>
			<div className="cen rounded-3 bg-dark bg-gradient border border-dark-subtle">{props.cen % 10}</div>
			<div className="dec rounded-3 bg-dark bg-gradient border border-dark-subtle">{props.dec % 10}</div>
			<div className="uni rounded-3 bg-dark bg-gradient border border-dark-subtle">{props.uni % 10}</div>
		</div>
	</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("app"));

let counter = 0;
setInterval(function () {
	const mil = Math.floor(counter / 1000);
	const cen = Math.floor(counter / 100);
	const dec = Math.floor(counter / 10);
	const uni = Math.floor(counter / 1);


	//render your react application

	root.render(
		<SecondsCounter mil={mil} cen={cen} dec={dec} uni={uni} />
	);

	counter++;
}, 1000);

