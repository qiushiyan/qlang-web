import { examples } from "./config";
import "prism-code-editor/grammars/q";

import { basicEditor } from "prism-code-editor/setups";

const runButton = document.querySelector("#editor-run") as HTMLButtonElement;
const editor = document.querySelector("#editor-editor") as HTMLTextAreaElement;
const editorView = document.querySelector("#editor-view") as HTMLDivElement;
const output = document.querySelector("#editor-output") as HTMLDivElement;
const exampleSelect = document.querySelector(
	"#editor-example-select",
) as HTMLSelectElement;

editor.value = examples["data-types"];

const editor2 = basicEditor("#editor-view", {
	language: "q",
	theme: "atom-one-dark",
	value: editor.value,
});

// adding styles to the shadow dom element of the prism editor
const sheet = new CSSStyleSheet();
sheet.replaceSync(".prism-code-editor {height: 100%}");
editorView.shadowRoot?.adoptedStyleSheets.push(sheet); // You want to add to stylesheets list

exampleSelect.addEventListener("change", (e) => {
	// @ts-ignore
	const example = e.currentTarget.value as string;

	switch (example) {
		case "data-types":
			editor2.setOptions({
				value: examples["data-types"],
			});
			break;
		case "expressions":
			editor2.setOptions({
				value: examples.expressions,
			});
			break;
		case "functions":
			editor2.setOptions({
				value: examples.functions,
			});
			break;
		case "functional":
			editor2.setOptions({
				value: examples.functional,
			});
			break;
	}
});

runButton.addEventListener("click", () => {
	const oldLog = console.log;
	const messages: string[] = [];
	console.log = (message: string) => {
		messages.push(message);
	};
	const result = runScript(editor.value.trim());

	output.innerHTML = messages.join("<br />");

	if (result.error) {
		output.textContent = result.error;
		output.className = "error";
	}

	if (result.result) {
		output.textContent = result.result;
		output.className = "";
	}

	console.log = oldLog;
});
