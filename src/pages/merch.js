import React from "react";
import Layout from "../components/layout";
import BlockQuote from "../components/blockquote";
import mom from "./Retina_Short_Mama.png";
import baby from "./Retina_Short_Baby.png";
import shark from "./Retina_Short_Shark.png";
import mc from "./Retina_Short_MC.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import rbLogo from "./rbubbleLogo.jpg";

const Amazon = props => (
	<a
		href={props.to}
		style={{
			backgroundImage: `none`,
		}}
	>
		<FontAwesomeIcon icon={faAmazon} />
	</a>
);

const RedBubble = props => (
	<a
		href={props.to}
		style={{
			backgroundImage: `none`,
		}}
	>
		<img icon={faAmazon} src={rbLogo} />
	</a>
);

export default () => (
	<Layout>
		<div style={{ padding: `10px 0` }}>
			<BlockQuote>
				Take a bite out of the holidays with some sweet merchandise
			</BlockQuote>
		</div>
		<hr />
		<BlockQuote>
			<h1>Santa Shark</h1>
			<img src={shark} alt="Santa Shark" />
		</BlockQuote>

		<hr />
		<BlockQuote>
			<h1>Baby Shark</h1>
			<img src={baby} alt="Baby Shark" />
		</BlockQuote>

		<hr />
		<BlockQuote>
			<h1>Mama Shark</h1>
			<img src={mom} alt="Mama Shark" />
		</BlockQuote>

		<hr />
		<BlockQuote>
			<h1>Mom & Baby Shark</h1>
			<img src={mc} alt="Mom & Child Shark" />
		</BlockQuote>
	</Layout>
);
