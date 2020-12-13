export interface CreateFolder {
    name: string;
}
export interface CreateFolderOpts {
    spaceId: number;
    data: CreateFolder;
}
export interface CreateFolderResponse {
    id: string;
    name: string;
    orderindex: number;
    override_statuses: boolean;
    hidden: boolean;
    space: {
        id: string;
        name: string;
        access: boolean;
    };
    task_count: string;
}
export interface UpdateFolder {
    name: string;
}
export interface UpdateFolderOpts {
    folderId: number;
    data: UpdateFolder;
}
export declare type UpdateFolderResponse = CreateFolderResponse;
export interface Folder extends CreateFolderResponse {
    lists: any[];
}
export declare type GetFoldersResponse = Folder[];
export declare type GetFolderResponse = Folder;
