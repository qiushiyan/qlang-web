type QResult =
	| { error: null; result: null }
	| { error: null; result: string }
	| { error: string; result: null };

type Tab = "terminal" | "editor";
