import Axios, { Method } from "axios";

export class Request {
	constructor(private readonly path: string, private apiKey?: string) {}

	public setApiKey(key: string) {
		this.apiKey = key;
	}

	private request<T, R>(method: Method, path: string, body?: T): Promise<R> {
		return Axios({
			method,
			data: body,
			headers: {
				Authorization: this.apiKey,
			},
		}).then((data) => data.data);
	}
}
