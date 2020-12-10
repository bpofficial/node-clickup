import { Request } from "./request.class";

type Query = { [i: string]: string | number };

export class Endpoint {
	private _request: Request;

	constructor(protected readonly path: string) {}

	set request(request: Request) {
		this._request = request;
	}

	private joinPaths(path: string, queryOpts?: Query) {
		const queryStr = Object.keys(queryOpts)
			.map((key) => `${key}=${queryOpts[key]}`)
			.join("&");
		return [[this.path, path].join("/"), queryStr].join("?");
	}

	protected get<R>(path: string, queryOpts?: Query) {
		return this._request.get<R>(this.joinPaths(path, queryOpts));
	}

	protected post<T, R>(body: T, path = "") {
		return this._request.post<T, R>(path, body);
	}

	protected put<T, R>(body: T, path = "") {
		return this._request.put<T, R>(path, body);
	}

	protected delete<R>(path: string) {
		return this._request.delete<R>(path);
	}
}
