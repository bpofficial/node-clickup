import { Attachments } from "../endpoints/attachments";
import { Checklists } from "../endpoints/checklists";
import { Comments } from "../endpoints/comments";
import { CustomFields } from "../endpoints/custom-fields";
import { Dependencies } from "../endpoints/dependencies";
import { Folders } from "../endpoints/folders";
import { Lists } from "../endpoints/lists";
import { Spaces } from "../endpoints/spaces";
import { Request } from "./request.class";

export class ClickUp {
	private request: Request;
	private readonly root = "https://api.clickup.com/api/v2/";

	private _attachments!: Attachments;
	private _checklists!: Checklists;
	private _comments!: Comments;
	private _customFields!: CustomFields;
	private _dependencies!: Dependencies;
	private _folders!: Folders;
	private _lists!: Lists;
	private _spaces!: Spaces;

	constructor() {
		this.request = new Request(this.root);
		this.updateRequest();
	}

	private updateRequest() {
		this._attachments = new Attachments(this.request);
		this._checklists = new Checklists(this.request);
		this._comments = new Comments(this.request);
		this._customFields = new CustomFields(this.request);
		this._dependencies = new Dependencies(this.request);
		this._folders = new Folders(this.request);
		this._lists = new Lists(this.request);
		this._spaces = new Spaces(this.request);
	}

	public setPersonalApiKey(key: string) {
		this.request.setApiKey(key);
		this.updateRequest();
	}

	public setOauthToken(token: string) {
		this.request.setApiKey(token);
		this.updateRequest();
	}

	get Attachments() {
		return this._attachments;
	}

	get Checklists() {
		return this._checklists;
	}

	get Comments() {
		return this._comments;
	}

	get CustomFields() {
		return this._customFields;
	}

	get Dependencies() {
		return this._dependencies;
	}

	get Folders() {
		return this._folders;
	}

	get Lists() {
		return this._lists;
	}

	get Spaces() {
		return this._spaces;
	}
}

const api = new ClickUp();
