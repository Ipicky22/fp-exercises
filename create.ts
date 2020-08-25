function create(...args: unknown[]): Array<number> {
	let result: number[] = [];

	args.forEach((item: number) => {
		result.push(item);
	});

	return result;
}
