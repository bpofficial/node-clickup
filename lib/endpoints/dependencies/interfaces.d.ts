import { User } from "../../interfaces/user";
export interface AddDependencyOf {
    dependency_of: string;
}
export interface AddDependsOn {
    depends_on: string;
}
export interface AddDependencyOpts {
    taskId: string;
    customTaskIds?: boolean;
    teamId?: string;
    data: AddDependencyOf | AddDependsOn;
}
export interface AddDependencyResponse {
}
export interface DeleteDependencyOpts {
    taskId: string;
    dependsOn: string;
    dependencyOf: string;
    customTaskIds?: boolean;
    teamId?: number;
}
export interface AddTaskLink {
}
export interface AddTaskLinkOpts {
    taskId: string;
    linksTo: string;
    customTaskIds?: boolean;
    teamId?: number;
    data: AddTaskLink;
}
export interface AddTaskLinkResponse {
    task: {
        id: string;
        name: string;
        status: {
            status: string;
            color: string | null;
            orderindex: number;
            type: string;
        };
        orderindex: string;
        date_created: string;
        date_updated: string | string;
        date_closed: string | null;
        creator: {
            id: number;
            username: string;
            color: string;
            profilePicture: string | null;
        };
        assignees: User[];
        checklists: any[];
        tags: any[];
        parent: string | null;
        priority: string | null;
        due_date: string | null;
        start_date: string | null;
        time_estimate: string | null;
        time_spent: string | null;
        list: {
            id: string;
        };
        folder: {
            id: string;
        };
        space: {
            id: string;
        };
        linked_tasks: {
            task_id: string;
            link_id: string;
            date_created: string;
            userid: string;
        }[];
        url: string;
    };
}
export declare type DeleteTaskLinkOpts = AddTaskLinkOpts;
export declare type DeleteTaskLinkResponse = AddTaskLinkResponse;
