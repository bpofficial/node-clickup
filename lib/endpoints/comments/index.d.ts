import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CreateChatViewCommentOpts, CreateListCommentOpts, CreateTaskCommentOpts, CreateTaskCommentResponse, GetTaskCommentsOpts, GetTaskCommentsResponse, UpdateCommentOpts, UpdateCommentResponse } from "./interfaces";
export declare class Comments extends Endpoint {
    constructor(request: Request);
    createTaskComment(opts: CreateTaskCommentOpts): Promise<CreateTaskCommentResponse>;
    createChatViewComment(opts: CreateChatViewCommentOpts): Promise<CreateTaskCommentResponse>;
    createListComment(opts: CreateListCommentOpts): Promise<CreateTaskCommentResponse>;
    getTaskComments(opts: GetTaskCommentsOpts): Promise<GetTaskCommentsResponse>;
    getChatViewComments(viewId: string): Promise<GetTaskCommentsResponse>;
    getListComments(listId: string): Promise<GetTaskCommentsResponse>;
    updateComment(opts: UpdateCommentOpts): Promise<UpdateCommentResponse>;
    deleteComment(commentId: number): Promise<void>;
}
export * from "./interfaces";
