import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CreateChecklistItem,
	CreateChecklistItemOpts,
	CreateChecklistOpts,
	CreateChecklistResponse,
	UpdateChecklistItem,
	UpdateChecklistItemOpts,
	UpdateChecklistItemResponse,
	UpdateChecklistOpts,
	UpdateChecklistResponse,
} from "./interfaces";

export class Checklists extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createChecklist({ taskId, data }: CreateChecklistOpts) {
		return this.post<unknown, CreateChecklistResponse>(
			data,
			`/task/${taskId}/checklist`
		);
	}

	public async updateChecklist({ checklistId, data }: UpdateChecklistOpts) {
		return this.put<unknown, UpdateChecklistResponse>(
			data,
			`/checklist/${checklistId}`
		);
	}

	public async deleteChecklist(checklistId: string): Promise<void> {
		return this.delete<void>(`/checklist/${checklistId}`);
	}

	public async createChecklistItem({
		checklistId,
		data,
	}: CreateChecklistItemOpts) {
		return this.post<CreateChecklistItem, CreateChecklistResponse>(
			data,
			`/checklist/${checklistId}/checklist_item`
		);
	}

	public async updateChecklistItem({
		checklistId,
		checklistItemId,
		data,
	}: UpdateChecklistItemOpts) {
		return this.put<UpdateChecklistItem, UpdateChecklistItemResponse>(
			data,
			`/checklist/${checklistItemId}/checklist_item/${checklistId}`
		);
	}

	public async deleteChecklistItem(
		checklistId: string,
		checklistItemId: string
	) {
		return this.delete<void>(
			`/checklist/${checklistId}/checklist_item/${checklistItemId}`
		);
	}
}
