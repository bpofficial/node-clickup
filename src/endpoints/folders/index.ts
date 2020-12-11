import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CreateFolder,
	CreateFolderOpts,
	CreateFolderResponse,
	GetFolderResponse,
	GetFoldersResponse,
	UpdateFolder,
	UpdateFolderOpts,
	UpdateFolderResponse,
} from "./interfaces";

export class Folders extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createFolder(opts: CreateFolderOpts) {
		return this.post<CreateFolder, CreateFolderResponse>(
			opts.data,
			`/space/${opts.spaceId}/folder`
		);
	}

	public async updateFolder(opts: UpdateFolderOpts) {
		return this.put<UpdateFolder, UpdateFolderResponse>(
			opts.data,
			`/folder/${opts.folderId}`
		);
	}

	public async deleteFolder(folderId: number) {
		return this.delete<void>(`/folder/${folderId}`);
	}

	public async getFolders(spaceId: number, archived = false) {
		return this.get<GetFoldersResponse>(`/space/${spaceId}/folder`, {
			archived: archived ? "true" : "false",
		});
	}

	public async getFolder(folderId: number) {
		return this.get<GetFolderResponse>(`/folder/${folderId}`);
	}
}

export * from "./interfaces";
