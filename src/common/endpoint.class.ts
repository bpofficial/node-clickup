import { Request } from "./request.class";

type Query = { [i: string]: string | number };

export class Endpoint {
	constructor(
		protected readonly path: string,
		private readonly request: Request
	) {}

	private joinPaths(path: string, queryOpts?: Query) {
		const queryStr = Object.keys(queryOpts)
			.map((key) => `${key}=${queryOpts[key]}`)
			.join("&");
		return [[this.path, path].join("/"), queryStr].join("?");
	}

	protected get<R>(path: string, queryOpts?: Query) {
		return this.request.get<R>(this.joinPaths(path, queryOpts));
	}

	protected post<T, R>(body: T, path = "", queryOpts?: Query) {
		return this.request.post<T, R>(this.joinPaths(path, queryOpts), body);
	}

	protected put<T, R>(body: T, path = "") {
		return this.request.put<T, R>(path, body);
	}

	protected delete<R>(path: string) {
		return this.request.delete<R>(path);
	}
}
