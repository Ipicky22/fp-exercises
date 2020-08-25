function compose<A, B, C>(f: (arg: A) => B, g: (arg: B) => C): (arg: A) => C {
	return (result) => g(f(result));
}

function trimText(textEntry: string) {
	let result: string = textEntry;
	return result.trim();
}

function upperText(textEntry: string) {
	let result: string = textEntry;
	return result.toUpperCase();
}

const getCompose: (arg: string) => string = compose(trimText, upperText);

getCompose("Hello World");
