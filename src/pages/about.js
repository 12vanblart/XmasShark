import React from "react";
import Layout from "../components/layout";
import BlockQuote from "../components/blockquote";
import basicShark from "./Retina_Short_Shark.png";

export default () => (
	<Layout>
		<h1>The Background Story</h1>
		<p>
			<em>Twas the night before Christmas... </em>
			<b>Not really.</b>
		</p>

		<p>
			It was just your average family Christmas cookie baking session when
			we heard our mom ask,
		</p>
		<BlockQuote>
			"<em>What</em> are these?"
		</BlockQuote>
		<p>
			She had just walked into the room where we were cutting out the
			cookies from the oh-so-delicious homemade cookie dough... and my
			brother had taken a shark cookie cutter to one of the last
			doughballs.
		</p>
		<BlockQuote>
			"<em>It's the Christmas Shark!</em>" my brother responded
			matter-of-factly.
		</BlockQuote>
		<p>
			<b>And thus the Shark was born.</b>
		</p>
		<p>
			Ever since, it's been a recurring family joke. But also...{" "}
			<em>how else would Santa deliver presents to Atlantis</em>
		</p>
		<img src={basicShark} alt="Santa Shark" />
	</Layout>
);
