import { Request } from "./request.class";

export class Endpoint {
	private _request: Request;

	constructor(protected readonly path: string) {}

	set request(request: Request) {
		this._request = request;
	}

	protected get() {}
	protected post() {}
	protected put() {}
	protected delete() {}
}
