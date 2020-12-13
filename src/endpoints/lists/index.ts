import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	AddTaskToListOpts,
	CreateFolderlessListOpts,
	CreateList,
	CreateListOpts,
	CreateListResponse,
	GetFolderlessListsOpts,
	GetListOpts,
	GetListsResponse,
	RemoveTaskFromListOpts,
	UpdateList,
	UpdateListOpts,
	UpdateListResponse,
} from "./interfaces";

export class Lists extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createList(opts: CreateListOpts) {
		return this.post<CreateList, CreateListResponse>(
			opts.data,
			`/folder/${opts.folderId}/list`
		);
	}

	public async createFolderlessList(opts: CreateFolderlessListOpts) {
		return this.post<CreateList, CreateListResponse>(
			opts.data,
			`/space/${opts.spaceId}/list`
		);
	}

	public async updateList(opts: UpdateListOpts) {
		return this.put<UpdateList, UpdateListResponse>(
			opts.data,
			`/list/${opts.listId}`
		);
	}

	public async deleteList(listId: number) {
		return this.delete<void>(`/list/${listId}`);
	}

	public async getLists(folderId: number, archived = false) {
		return this.get<GetListsResponse>(`/folder/${folderId}/list`, {
			archived: archived ? "true" : "false",
		});
	}

	public async getFolderlessLists(opts: GetFolderlessListsOpts) {}

	public async getList(opts: GetListOpts) {}

	public async addTaskToList(opts: AddTaskToListOpts) {}

	public async removeTaskFromList(opts: RemoveTaskFromListOpts) {}
}
