import React from "react";
import Layout from "../components/layout";
import BlockQuote from "../components/blockquote";
import mom from "./Retina_Short_Mama.png";
import baby from "./Retina_Short_Baby.png";
import shark from "./Retina_Short_Shark.png";

export default () => (
	<Layout selected="Home">
		<h1 style={{ textAlign: `center` }}>Meet the family</h1>
		<div>
			<table>
				<tr>
					<td className={`borderless`}>
						<img src={mom} alt="Mama Shark" />
					</td>
					<td className={`borderless`}>
						<img src={baby} alt="Baby Shark" />
					</td>
					<td className={`borderless`}>
						<img src={shark} alt="Santa Shark" />
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
