import { User } from "../../interfaces/user";

export interface CreateList {
	name: string;
	content: string;
	due_date: number;
	due_date_time: boolean;
	priority: number;
	assignee: number;
	status: string;
}

export interface CreateListOpts {
	folderId: number;
	data: CreateList;
}

export interface CreateFolderlessListOpts {
	spaceId: string;
	data: CreateList;
}

export interface CreateListResponse {
	id: string;
	name: string;
	orderindex: number;
	content: string;
	status: {
		status: string;
		color: string;
		hide_label: boolean;
	};
	priority: {
		priority: string;
		color: string;
	};
	assignee: User | null;
	task_count: string | number | null;
	due_date: string;
	due_date_time: boolean;
	start_date: string | number | null;
	start_date_time: string | number | null;
	folder: {
		id: string;
		name: string;
		hidden: boolean;
		access: boolean;
	};
	space: {
		id: string;
		name: string;
		access: boolean;
	};
	statuses: {
		status: string;
		orderindex: number;
		color: string;
		type: string;
	}[];
	inbound_address: string;
}

export interface UpdateList {
	name: string;
	content: string;
	due_date: number;
	due_date_time: boolean;
	priority: number;
	assignee: any;
	unset_status: boolean;
}

export interface UpdateListOpts {
	listId: number;
	data: UpdateList;
}

export type UpdateListResponse = CreateListResponse;
export type GetListsResponse = CreateListResponse[];

export interface GetFolderlessListsOpts {}
export interface GetListOpts {}
export interface AddTaskToListOpts {}
export interface RemoveTaskFromListOpts {}
