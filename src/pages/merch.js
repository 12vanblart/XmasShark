import React from "react";
import Layout from "../components/layout";
import BlockQuote from "../components/blockquote";
import mom from "./Retina_Short_Mama.png";
import baby from "./Retina_Short_Baby.png";
import shark from "./Retina_Short_Shark.png";
import mc from "./Retina_Short_MC.png";

export default () => (
	<Layout>
		<div style={{ padding: `10px 0` }}>
			<BlockQuote>
				Take a bite out of the holidays with some sweet merchandise
			</BlockQuote>
		</div>
		<hr />
		<BlockQuote>
			Santa Shark
			<img src={shark} />
		</BlockQuote>
	</Layout>
);
