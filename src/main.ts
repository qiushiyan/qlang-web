import Split from "split.js";
import "./editor";
import "./styles.css";
import "./tabs";
import { initWASM } from "./wasm";

declare global {
	var run: (input: string) => QResult;
	var runScript: (input: string) => QResult;
}

setTimeout(async () => {
	await initWASM();
	console.error("WASM program exited unexpectedly");
});

Split(["#left", "#right"]);
Split(["#editor-view", "#editor-control"], {
	direction: "vertical",
	sizes: [60, 40],
});
