import fetch from "node-fetch";
import { HTMLMetaElement, Window } from "happy-dom";
import { metadataType } from "./type";
import { isValidArgs } from "./validate/args.js";
import { dirExists } from "./utils/dirExists.js";
import { promises as fs } from "fs";

const args = process.argv;

if (!isValidArgs(args)) {
	console.log(`${args.slice(2)}は不適切な引数です`);
	process.exit(1);
}

(async () => {
	const url = args[2] || "http://127.0.0.1:3000/";
	const res = await fetch(`${url}`);
	const html = await res.text();
	const window = new Window();
	const document = window.document;
	document.write(html);

	const metadata: metadataType = {
		title: "",
		description: "",
	};

	metadata.title = document.title;
	metadata.description = (
		document.querySelector('meta[name="description"]') as HTMLMetaElement
	).content;

	try {
		const dirExist = await dirExists("snapshots");

		if (!dirExist) {
			await fs.mkdir("snapshots");
		} else {
			const previousMetadata: metadataType = JSON.parse(
				await fs.readFile("snapshots/metadata.json", "utf8"),
			);

			const mateDateAreEqual = (currentMatadata: any, previousMetadata: any) => {
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
					if (!mateDateAreEqual(currentMatadata[key], previousMetadata[key])) {
						return false;
					}
				}

				return true;
			};
			console.log(mateDateAreEqual(metadata, previousMetadata));
		}

		await fs.writeFile("snapshots/metadata.json", JSON.stringify(metadata));
	} catch (e) {
		console.log(e);
	}
})();
