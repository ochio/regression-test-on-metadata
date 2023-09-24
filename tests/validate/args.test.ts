import { isValidArgs } from "@/validate/args";

describe("validate args", () => {
	test("引数が3つの時はtrue", () => {
		expect(isValidArgs(["node", "index.js", "__URL__"])).toBe(true);
	});

	test("引数が4つ以上の時はfalse", () => {
		expect(isValidArgs(["node", "index.js", "__URL__", "EXTRA_ARG"])).toBe(false);
	});
});
