import { isValidArgs } from "validate/args";

describe("validate args", () => {
	test("arg length is 3", () => {
		expect(isValidArgs(["node", "index.js", "__URL__"])).toBe(true);
	});

	test("arg length is not 3", () => {
		expect(isValidArgs(["node", "index.js", "__URL__", "EXTRA_ARG"])).toBe(false);
	});
});
