import { User } from "../../interfaces/user";
export interface CreateTaskComment {
    comment_text: string;
    assignee: number;
    notify_all: boolean;
}
export interface CreateTaskCommentOpts {
    taskId: string;
    customTaskIds?: boolean;
    teamId?: number;
    data: CreateTaskComment;
}
export interface CreateTaskCommentResponse {
    id: string;
    hist_id: string;
    data: number;
}
export declare type CreateChatViewComment = CreateTaskComment;
export interface CreateChatViewCommentOpts {
    viewId: string;
    data: CreateChatViewComment;
}
export declare type CreateChatViewCommentResponse = CreateTaskCommentResponse;
export declare type CreateListComment = CreateTaskComment;
export interface CreateListCommentOpts {
    listId: number;
    data: CreateListComment;
}
export declare type CreateListCommentResponse = CreateTaskCommentResponse;
export interface GetTaskCommentsOpts {
    taskId: string;
    customTaskIds?: boolean;
    teamId?: string;
}
export interface GetTaskCommentsResponse {
    comments: {
        id: string;
        comment: {
            text: string;
        }[];
        comment_text: string;
        user: User;
        resolved: boolean;
        assignee: User | null;
        assigned_by: User | null;
        reactions: unknown[];
        date: string;
    }[];
}
export declare type GetChatViewCommentsResponse = GetTaskCommentsResponse;
export declare type GetListCommentsResponse = GetTaskCommentsResponse;
export interface UpdateComment {
    comment_text?: string;
    assignee?: string;
    resolved?: boolean;
}
export interface UpdateCommentOpts {
    commentId: number;
    data: UpdateComment;
}
export interface UpdateCommentResponse {
}
