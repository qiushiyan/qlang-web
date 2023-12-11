export const init = async () => {
	if (WebAssembly) {
		if (!WebAssembly.instantiateStreaming) {
			// polyfill
			WebAssembly.instantiateStreaming = async (resp, importObject) => {
				const source = await (await resp).arrayBuffer();
				return await WebAssembly.instantiate(source, importObject);
			};
		}

		const go = new Go();

		const result = await WebAssembly.instantiateStreaming(
			fetch("/main.wasm"),
			go.importObject,
		);

		return await go.run(result.instance);
	}

	alert(
		"Your browser does not support WebAssembly. To run the code, consider switch to the latest version of Chrome or Firefox.",
	);
};
