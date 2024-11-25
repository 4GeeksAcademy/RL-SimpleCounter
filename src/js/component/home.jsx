import React from "react";

//create your first component
const Home = () => {
	return function SencondsCounter(props) {
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
			</div>;
		</div>
		);
	};
}

export default Home;
