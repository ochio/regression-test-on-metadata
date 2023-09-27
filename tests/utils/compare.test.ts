import { compare } from "@/utils/compare";

describe("前回のメタデータと現在のメタデータを比較する", () => {
	test("前回のメタデータと同じ内容ならtrueを返す", async () => {
		const currMeta = {
			title: "Lorem ipsum",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
		};
		const prevMeta = {
			title: "Lorem ipsum",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
		};
		expect(compare(currMeta, prevMeta)).toBe(true);
	});

	test("前回のメタデータと違う内容ならfalseを返す", async () => {
		const currMeta = {
			title: "Lorem ipsum",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
		};
		const prevMeta = {
			title: "Lorem ",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut ",
		};
		expect(compare(currMeta, prevMeta)).toBe(false);
	});
});
