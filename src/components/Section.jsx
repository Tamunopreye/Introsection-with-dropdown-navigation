import React from "react";
import hero from "../assets/images/image-hero-desktop.png";
import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
const Section = () => {
	return (
		<section>
			<div className="container">
				{/* contents */}
				<div className="contents">
					<h1>
						Make <br /> remote work
					</h1>
					<p>
						Get your team in sync no matter your location.
						Streamline processes, create team rituals, and watch
						productivity soar.
					</p>
					<button>Learn more</button>
					<footer className="footer">
						<img src={databiz} alt="databiz" />
						<img src={audiophile} alt="audiophile" />
						<img src={meet} alt="meet" />
						<img src={maker} alt="maker" />
					</footer>
				</div>
				{/* img container */}
				<div className="img-container">
					<img src={hero} alt="hero" />
				</div>
			</div>
		</section>
	);
};

export default Section;
