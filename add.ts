function add(arrayEntry: unknown[], ...args: unknown[]): Array<unknown> {
	let result: unknown[] = [...arrayEntry, ...args];
	return result;
}
