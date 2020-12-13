import Axios, { Method } from "axios";

export class Request {
	constructor(private readonly path: string, private apiKey?: string) {}

	public setApiKey(key: string) {
		this.apiKey = key;
	}

	private async request<T, R>(
		method: Method,
		path: string,
		body?: T
	): Promise<R> {
		return Axios({
			method,
			data: body,
			url: this.path + path.replace(/\/\/+/g, "/"),
			headers: {
				Authorization: this.apiKey,
				"Content-Type": "application/json",
			},
		}).then((data) => data.data);
	}

	public async get<R>(path: string): Promise<R> {
		return this.request<never, R>("GET", path);
	}

	public async post<T, R>(path: string, body: T): Promise<R> {
		return this.request<T, R>("POST", path, body);
	}

	public async put<T, R>(path: string, body: T): Promise<R> {
		return this.request<T, R>("PUT", path, body);
	}

	public async delete<R>(path: string): Promise<R> {
		return this.request<never, R>("PUT", path);
	}
}
