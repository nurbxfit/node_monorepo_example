export function parseArrayBufferToUtf8(obj: any) {
	if (Buffer.isBuffer(obj)) {
		return obj.toString("utf8");
	}
	if (typeof obj === "object" && obj !== null && !(obj instanceof Date)) {
		if (Array.isArray(obj)) {
			const parsedArray = obj.map((item: any) => {
				return parseArrayBufferToUtf8(item);
			});
			return parsedArray;
		} else {
			const parsedObject: { [key: string]: any } = {};
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					parsedObject[key] = parseArrayBufferToUtf8(obj[key]);
				}
			}
			return parsedObject;
		}
	}
	// if not array buffer or object, return itself
	return obj;
}
