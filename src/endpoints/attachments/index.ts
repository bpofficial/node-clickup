import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CreateTaskAttachment,
	CreateTaskAttachmentResponse,
} from "./interfaces";

export class Attachments extends Endpoint {
	constructor(request: Request) {
		super("/task/:taskId/attachment", request);
	}

	public async createTaskAttachment(data: CreateTaskAttachment) {
		return this.post<CreateTaskAttachment, CreateTaskAttachmentResponse>(
			data
		);
	}
}

export * from "./interfaces";
