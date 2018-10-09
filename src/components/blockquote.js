import React from "react";

export default ({ children }) => (
	<p
		style={{
			fontSize: `1.3rem`,
			color: `grey`,
			paddingLeft: `15px`,
			textAlign: `center`,
		}}
	>
		{children}
	</p>
);
