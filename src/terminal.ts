import { shortcuts } from "./shortcuts";

export const addTerminalEntry = (terminal: HTMLDivElement) => {
	const entry = document.createElement("div");
	entry.className = "entry";

	const form = document.createElement("form");

	const label = document.createElement("label");
	label.textContent = "→  ";
	label.htmlFor = "input";

	const textarea = document.createElement("textarea");
	textarea.addEventListener("keydown", (event) => {
		const el = event.currentTarget as HTMLTextAreaElement;
		el.style.height = "0px";
		el.style.height = `${el.scrollHeight}px`;
	});
	textarea.name = "input";

	const output = document.createElement("pre");

	form.appendChild(label);
	form.appendChild(textarea);

	entry.appendChild(form);
	entry.appendChild(output);

	terminal.appendChild(entry);
	textarea.focus();

	form.addEventListener("keydown", shortcuts);

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const formData = new FormData(form);
		const input = formData.get("input") as string;
		const result = run(input);

		if (result.error) {
			output.textContent = result.error;
			output.className = "error";
		}

		if (result.result) {
			output.textContent = result.result;
		}

		textarea.disabled = true;

		addTerminalEntry(terminal);
	});
};
