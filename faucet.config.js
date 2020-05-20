module.exports = {
	images: [
		{
			source: "./photos",
			target: "./html",
			format: "webp"
		},
		{
			source: "./photos",
			target: "./html",
			format: "webp",
			suffix: "-thumbnail",
			width: 300,
			height: 300,
			keepRatio: false
		}
	],

	yourMemories: [
		{
			source: "./photos",
			target: "./html"
		}
	],

	manifest: {
		webRoot: "./html"
	},
	watchDirs: ["./photos"],
	plugins: [require("faucet-pipeline-images"), require(".")]
};