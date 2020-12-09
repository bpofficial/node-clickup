import { Endpoint } from "../../common/endpoint.class";

class ChecklistsEndpoint extends Endpoint {
	constructor() {
		super("");
	}
}

export class Checklists {
	public readonly checklists = new ChecklistsEndpoint();
}
