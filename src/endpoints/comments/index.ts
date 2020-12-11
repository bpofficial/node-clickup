import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CreateChatViewComment,
	CreateChatViewCommentOpts,
	CreateChatViewCommentResponse,
	CreateListComment,
	CreateListCommentOpts,
	CreateListCommentResponse,
	CreateTaskComment,
	CreateTaskCommentOpts,
	CreateTaskCommentResponse,
	GetChatViewCommentsResponse,
	GetListCommentsResponse,
	GetTaskCommentsOpts,
	GetTaskCommentsResponse,
	UpdateComment,
	UpdateCommentOpts,
	UpdateCommentResponse,
} from "./interfaces";

export class Comments extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createTaskComment(opts: CreateTaskCommentOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};

		return this.post<CreateTaskComment, CreateTaskCommentResponse>(
			opts.data,
			`/task/${opts.taskId}/comment`,
			query
		);
	}

	public async createChatViewComment(opts: CreateChatViewCommentOpts) {
		return this.post<CreateChatViewComment, CreateChatViewCommentResponse>(
			opts.data,
			`/view/${opts.viewId}/comment`
		);
	}

	public async createListComment(opts: CreateListCommentOpts) {
		return this.post<CreateListComment, CreateListCommentResponse>(
			opts.data,
			`/list/${opts.listId}/comment`
		);
	}

	public async getTaskComments(opts: GetTaskCommentsOpts) {
		return this.get<GetTaskCommentsResponse>(`/task/${opts.taskId}`, {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		});
	}

	public async getChatViewComments(viewId: string) {
		return this.get<GetChatViewCommentsResponse>(`/view/${viewId}/comment`);
	}

	public async getListComments(listId: string) {
		return this.get<GetListCommentsResponse>(`/list/${listId}/comment`);
	}

	public async updateComment(opts: UpdateCommentOpts) {
		return this.put<UpdateComment, UpdateCommentResponse>(
			opts.data,
			`/comment/${opts.commentId}`
		);
	}

	public async deleteComment(commentId: number) {
		return this.delete<void>(`/comment/${commentId}`);
	}
}
