import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { AddTaskToListOpts, CreateFolderlessListOpts, CreateListOpts, CreateListResponse, GetFolderlessListsOpts, GetListOpts, GetListsOpts, RemoveTaskFromListOpts, UpdateListOpts } from "./interfaces";
export declare class Lists extends Endpoint {
    constructor(request: Request);
    createList(opts: CreateListOpts): Promise<CreateListResponse>;
    createFolderlessList(opts: CreateFolderlessListOpts): Promise<CreateListResponse>;
    updateList(opts: UpdateListOpts): Promise<CreateListResponse>;
    deleteList(listId: number): Promise<void>;
    getLists(opts: GetListsOpts): Promise<void>;
    getFolderlessLists(opts: GetFolderlessListsOpts): Promise<void>;
    getList(opts: GetListOpts): Promise<void>;
    addTaskToList(opts: AddTaskToListOpts): Promise<void>;
    removeTaskFromList(opts: RemoveTaskFromListOpts): Promise<void>;
}
