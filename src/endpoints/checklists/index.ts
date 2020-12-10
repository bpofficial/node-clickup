import { Endpoint } from "../../common/endpoint.class";
import {
	CreateChecklistItemOpts,
	CreateChecklistOpts,
	CreateChecklistResponse,
	UpdateChecklistOpts,
	UpdateChecklistResponse,
} from "./interfaces";

export class Checklists extends Endpoint {
	constructor() {
		super("");
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
		return this.post<unknown, CreateChecklistResponse>(
			data,
			`/checklist/${checklistId}/checklist_item`
		);
	}

	public async updateChecklistItem({ checklistId, checklistItemId, data }) {}

	public async deleteChecklistItem(checklistId, checklistItemId) {}
}
