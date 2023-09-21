import fetch from "node-fetch";
import { HTMLMetaElement, Window } from "happy-dom";
import { metadataType } from "./type";
import { isValidArgs } from "./validate/args.js";

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
})();
