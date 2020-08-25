type RecursiveArray = Array<RecursiveArray | number>;

const ex: RecursiveArray = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

function sum(arrayEntry: []): number {
	let result: number = 0;

	arrayEntry.forEach((item) => {
		if (typeof item !== "number") {
			result += sum(item);
		} else {
			result += item;
		}
	});

	return result;
}

function depth(arrayEntry: []): number {
	let result: number = 0;

	arrayEntry.forEach((item) => {
		if (typeof item !== "number") {
			result += 1;
			depth(item);
		}
	});

	return result;
}

function compare(type: string, a: number, b: number): number {
	let result: number = a;

	if (type === "largest") {
		if (b > a) {
			result = b;
		}
	}

	if (type === "smallest") {
		if (b < a) {
			result = b;
		}
	}

	return result;
}

function largest(arrayEntry: RecursiveArray): number {
	let result: number = 0;

	arrayEntry.forEach((item: RecursiveArray) => {
		if (typeof item !== "number") {
			result += largest(item);
		} else {
			result = compare("largest", result, item);
		}
	});

	return result;
}

function smallest(arrayEntry: RecursiveArray): number {
	let result: number = 0;

	arrayEntry.forEach((item: RecursiveArray) => {
		if (typeof item !== "number") {
			result += smallest(item);
		} else {
			result = compare("smallest", result, item);
		}
	});

	return result;
}
