import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./Semaforo";
const Home = () => {
	return (
		<div class="traffic-light">
			<div class="light red" data-color="red"></div>
			<div class="light yellow" data-color="yellow"></div>
			<div class="light green" data-color="green"></div>
  		</div>

	);
};

export default Home;
