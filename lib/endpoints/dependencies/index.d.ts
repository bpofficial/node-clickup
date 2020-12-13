import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { AddDependencyOpts, AddTaskLinkOpts, AddTaskLinkResponse, DeleteDependencyOpts, DeleteTaskLinkOpts } from "./interfaces";
export declare class Dependencies extends Endpoint {
    constructor(request: Request);
    addDependency(opts: AddDependencyOpts): Promise<void>;
    deleteDependency(opts: DeleteDependencyOpts): Promise<void>;
    addTaskLink(opts: AddTaskLinkOpts): Promise<AddTaskLinkResponse>;
    deleteTaskLink(opts: DeleteTaskLinkOpts): Promise<AddTaskLinkResponse>;
}
export * from "./interfaces";
