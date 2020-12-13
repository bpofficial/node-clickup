import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CreateTaskAttachment, CreateTaskAttachmentResponse } from "./interfaces";
export declare class Attachments extends Endpoint {
    constructor(request: Request);
    createTaskAttachment(data: CreateTaskAttachment): Promise<CreateTaskAttachmentResponse>;
}
export * from "./interfaces";
