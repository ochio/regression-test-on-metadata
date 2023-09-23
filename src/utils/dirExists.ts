import { promises as fs } from "fs";

export async function dirExists(filepath: string) {
	try {
		return !(await fs.lstat(filepath)).isFile();
	} catch (e) {
		return false;
	}
}
