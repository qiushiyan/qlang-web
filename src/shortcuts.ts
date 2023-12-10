export const shortcuts = (event: KeyboardEvent) => {
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		submit(event);
	}

	if (event.ctrlKey && event.key === "l") {
		event.preventDefault();
		clear(event);
	}

	if (event.shiftKey && event.key === "Enter") {
		event.preventDefault();
		newLine(event);
	}
};

export const submit = (event: KeyboardEvent) => {
	const form = event.currentTarget as HTMLFormElement;
	form.dispatchEvent(new Event("submit"));
};

export const clear = (event: KeyboardEvent) => {
	const terminal = document.querySelector("#terminal") as HTMLDivElement;
	const entries = terminal.querySelectorAll(".entry");
	if (entries.length > 1) {
		entries.forEach((entry, i) => {
			if (i !== entries.length - 1) {
				entry.remove();
			}
		});
	}
};

export const newLine = (event: KeyboardEvent) => {
	const form = event.currentTarget as HTMLFormElement;
	const input = form.querySelector("textarea") as HTMLTextAreaElement;
	input.value += "\n";
};
