import { examples } from "./config";

const runButton = document.querySelector("#editor-run") as HTMLButtonElement;
const editor = document.querySelector("#editor-editor") as HTMLTextAreaElement;
const output = document.querySelector("#editor-output") as HTMLDivElement;
const exampleSelect = document.querySelector(
	"#editor-example-select",
) as HTMLSelectElement;

editor.value = examples["data-types"];

exampleSelect.addEventListener("change", (e) => {
	// @ts-ignore
	const example = e.currentTarget.value as string;

	switch (example) {
		case "data-types":
			editor.value = examples["data-types"];
			break;
		case "expressions":
			editor.value = examples.expressions;
			break;
		case "functions":
			editor.value = examples.functions;
			break;
		case "functional":
			editor.value = examples.functional;
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
