import React from "react";

export default ({ children }) => (
	<div
		style={{
			backgroundColor: `#8B2D2D`,
			color: `snow`,
			fontWeight: `bold`,
			fontSize: `24pt`,
			paddingLeft: `15px`,
		}}
	>
		{children}
	</div>
);
