export function cls(...classNames: string[]) {
	return classNames.join(' ');
}

export const checkLast = (index: number, lastIndex: number) => {
	return index + 1 === lastIndex;
};
