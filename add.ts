function add(arrayEntry: unknown[], ...args: unknown[]): Array<unknown> {
	let result: unknown[] = arrayEntry;

	args.forEach((item: unknown) => {
		result.push(item);
	});

	return result;
}
