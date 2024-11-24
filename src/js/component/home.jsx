import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Counter</h1>

				<div className="clock col-lg-6 col-12 m-auto">
					<div className="icon rounded-3 bg-dark bg-gradient border border-dark-subtle">
						<i class="fa-regular fa-clock"></i>
					</div>
					<div className="mil rounded-3 bg-dark bg-gradient border border-dark-subtle">0</div>
					<div className="cen rounded-3 bg-dark bg-gradient border border-dark-subtle">0</div>
					<div className="dec rounded-3 bg-dark bg-gradient border border-dark-subtle">0</div>
					<div className="uni rounded-3 bg-dark bg-gradient border border-dark-subtle">0</div>
				</div>
			

		</div>
	);
};

export default Home;
