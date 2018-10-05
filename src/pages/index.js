import React from "react";
import Layout from "../components/layout";
import BlockQuote from "../components/blockquote";
import mom from "./Retina_Short_MC.png";
import baby from "./Retina_Short_Baby.png";
import shark from "./Retina_Short_Shark.png";

export default () => (
	<Layout selected="Home">
		<h1>Meet the family</h1>
		<div>
			<table>
				<tr>
					<td className={`borderless`}>
						<img src={mom} />
					</td>
					<td className={`borderless`}>
						<img src={baby} />
					</td>
					<td className={`borderless`}>
						<img src={shark} />
					</td>
				</tr>
				<tr>
					<td className={`borderless`}>
						<BlockQuote>Mama Shark</BlockQuote>
					</td>
					<td className={`borderless`}>
						<BlockQuote>Baby Shark</BlockQuote>
					</td>
					<td className={`borderless`}>
						<BlockQuote>Santa Shark</BlockQuote>
					</td>
				</tr>
			</table>
		</div>
	</Layout>
);
