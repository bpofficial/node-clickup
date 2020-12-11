import { Attachments } from "../endpoints/attachments";
import { Checklists } from "../endpoints/checklists";
import { Comments } from "../endpoints/comments";
import { Request } from "./request.class";

export class API {
	private request: Request;
	private readonly root = "https://api.clickup.com/api/v2/";

	private _attachments: Attachments;
	private _checklists: Checklists;
	private _comments: Comments;

	constructor() {
		this.request = new Request(this.root);
		this.updateRequest();
	}

	private updateRequest() {
		this._attachments = new Attachments(this.request);
		this._checklists = new Checklists(this.request);
		this._comments = new Comments(this.request);
	}

	public setPersonalApiKey(key: string) {
		this.request.setApiKey(key);
		this.updateRequest();
	}

	public setOauthToken(token: string) {
		this.request.setApiKey(token);
		this.updateRequest();
	}

	get attachments() {
		return this._attachments;
	}

	get checklists() {
		return this._checklists;
	}

	get comments() {
		return this._comments;
	}
}
