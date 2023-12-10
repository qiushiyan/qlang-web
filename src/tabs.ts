const terminal = document.getElementById("terminal") as HTMLDivElement;
let activeTab: Tab = "editor";
const terminalButton = document.getElementById(
	"terminal-button",
) as HTMLButtonElement;
const terminalTab = document.getElementById("terminal") as HTMLDivElement;

const editorButton = document.getElementById(
	"editor-button",
) as HTMLButtonElement;
const editorTab = document.getElementById("editor") as HTMLDivElement;
const editorInput = editorTab.querySelector("textarea") as HTMLTextAreaElement;

terminalButton.addEventListener("click", () => {
	if (activeTab === "terminal") return;

	activeTab = "terminal";
	editorTab.style.display = "none";
	terminalTab.style.display = "block";
	editorButton.classList.remove("active");
	terminalButton.classList.add("active");
});

editorButton.addEventListener("click", () => {
	if (activeTab === "editor") return;

	activeTab = "editor";
	editorTab.style.display = "flex";
	terminalTab.style.display = "none";
	editorButton.classList.add("active");
	terminalButton.classList.remove("active");
	editorInput.focus();
});
