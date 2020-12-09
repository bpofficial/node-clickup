import { Attachments } from "../endpoints/attachments";
import { Checklists } from "../endpoints/checklists";
import { Request } from "./request.class";

export class API {
	private request: Request;
	private readonly root = "https://api.clickup.com/api/v2/";

	public readonly attachments: Attachments;
	public readonly checklists: Checklists;

	constructor() {
		this.request = new Request(this.root);
		this.attachments = new Attachments();

		this.updateRequest();
	}

	private updateRequest() {
		this.attachments.request = this.request;
	}

	public setPersonalApiKey(key: string) {
		this.request.setApiKey(key);
		this.updateRequest();
	}

	public setOauthToken(token: string) {
		this.request.setApiKey(token);
		this.updateRequest();
	}
}
