import "./styles.css";
import { addTerminalEntry } from "./terminal";
import { init } from "./wasm";
import "./tabs";
import "./editor";
import Split from "split.js";

declare global {
	var run: (input: string) => QResult;
	var runScript: (input: string) => QResult;
}

Split(["#left", "#right"]);
Split(["#editor-editor", "#editor-control"], {
	direction: "vertical",
	sizes: [60, 40],
});

const bootstrap = async () => {
	await init();
	addTerminalEntry(terminal);
};

bootstrap();
