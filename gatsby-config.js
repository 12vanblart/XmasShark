module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-126950590-1`,
				head: false,
				anonymize: true,
				respectDNT: true,
				exclude: [],
			},
		},
	],
};
