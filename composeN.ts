function composeN(...args: unknown[]) {
	let i: number = args.length;
	let result: string;

	do {
		let f: unknown = args[i - 1];
		result = f(result);
		i--;
	} while (i > 0);

	return result;
}

function trimText(textEntry: string) {
	let result: string = textEntry;
	return result.trim();
}

function upperText(textEntry: string) {
	let result: string = textEntry;
	return result.toUpperCase();
}

const getComposeN: (arg: string) => unknown = composeN(trimText, upperText);

getComposeN("Hello World");
