function create(...args: unknown[]): Array<unknown> {
	let result: unknown[] = [];

	args.forEach((item: unknown) => {
		result.push(item);
	});

	return result;
}
