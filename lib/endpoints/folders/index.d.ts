import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CreateFolderOpts, CreateFolderResponse, GetFoldersResponse, UpdateFolderOpts } from "./interfaces";
export declare class Folders extends Endpoint {
    constructor(request: Request);
    createFolder(opts: CreateFolderOpts): Promise<CreateFolderResponse>;
    updateFolder(opts: UpdateFolderOpts): Promise<CreateFolderResponse>;
    deleteFolder(folderId: number): Promise<void>;
    getFolders(spaceId: number, archived?: boolean): Promise<GetFoldersResponse>;
    getFolder(folderId: number): Promise<import("./interfaces").Folder>;
}
export * from "./interfaces";
