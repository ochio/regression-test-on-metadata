export const compare = (currentMatadata: any, previousMetadata: any) => {
	const getKeys = <T extends { [key: string]: unknown }>(obj: T): (keyof T)[] => {
		return Object.keys(obj);
	};
	const currKeys = getKeys(currentMatadata);
	const prevKeys = getKeys(previousMetadata);

	// プロパティの数が異なる場合
	if (currKeys.length !== prevKeys.length) {
		return false;
	}

	// オブジェクトの型がプリミティブの場合
	if (typeof currentMatadata !== "object") {
		return currentMatadata === previousMetadata;
	}

	for (const key of currKeys) {
		if (!compare(currentMatadata[key], previousMetadata[key])) {
			return false;
		}
	}

	return true;
};
