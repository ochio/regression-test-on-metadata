import { expect, describe, test } from "vitest";
import { isValidArgs } from "../../src/validate/args";

describe("validate args", () => {
	test("test", () => {
		expect(isValidArgs(["node index.js hoge"])).toBe(false);
	});
});
