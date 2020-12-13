import { Attachments } from "../endpoints/attachments";
import { Checklists } from "../endpoints/checklists";
import { Comments } from "../endpoints/comments";
import { CustomFields } from "../endpoints/custom-fields";
import { Dependencies } from "../endpoints/dependencies";
import { Folders } from "../endpoints/folders";
import { Lists } from "../endpoints/lists";
export declare class ClickUp {
    private request;
    private readonly root;
    private _attachments;
    private _checklists;
    private _comments;
    private _customFields;
    private _dependencies;
    private _folders;
    private _lists;
    constructor();
    private updateRequest;
    setPersonalApiKey(key: string): void;
    setOauthToken(token: string): void;
    get Attachments(): Attachments;
    get Checklists(): Checklists;
    get Comments(): Comments;
    get CustomFields(): CustomFields;
    get Dependencies(): Dependencies;
    get Folders(): Folders;
    get Lists(): Lists;
}
