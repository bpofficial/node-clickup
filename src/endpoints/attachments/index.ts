import { Endpoint } from "../../common/endpoint.class";
import { CreateTaskAttachment } from "./interfaces";

/**
 * @deprecated This is redundant as files will be uploaded on clickup
 */
export class Attachments extends Endpoint {
	constructor() {
		super("/task/:taskId/attachment");
	}

	public async createTaskAttachment(data: CreateTaskAttachment) {}
}
