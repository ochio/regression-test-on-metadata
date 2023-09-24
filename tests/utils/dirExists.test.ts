import { dirExists } from "@/utils/dirExists";

describe("対象のディレクトリが存在するかどうか", () => {
	test("ディレクトリが存在する場合trueを返す", async () => {
		expect(await dirExists("src")).toBe(true);
	});

	test("ディレクトリが存在する場合falseを返す", async () => {
		expect(await dirExists("notExistDirectory")).toBe(false);
	});
});
