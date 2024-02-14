import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<Hero/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;
