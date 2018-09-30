import React from "react";
import Header from "./header.js";

export default ({ children }) => (
	<body>
		<Header>The Xmas Shark</Header>
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
			{children}
		</div>
	</body>
);
