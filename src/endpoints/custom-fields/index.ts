import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CustomField,
	RemoveCustomFieldValueOpts,
	SetCustomFieldValue,
	SetCustomFieldValueOpts,
} from "./interfaces";

export class CustomFields extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async getAccessibleCustomFields(listId: string) {
		return this.get<CustomField[]>(`/list/${listId}/field`);
	}

	public async setCustomFieldValue(opts: SetCustomFieldValueOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		return this.post<SetCustomFieldValue, void>(
			opts.data,
			`/task/${opts.taskId}/field/${opts.fieldId}`,
			query
		);
	}

	public async removeCustomFieldValue(opts: RemoveCustomFieldValueOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		return this.delete<void>(
			`/task/${opts.taskId}/field/${opts.fieldId}`,
			query
		);
	}
}

export * from "./interfaces";
