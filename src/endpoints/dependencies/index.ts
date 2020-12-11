import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	AddDependencyOf,
	AddDependencyOpts,
	AddDependencyResponse,
	AddDependsOn,
	AddTaskLink,
	AddTaskLinkOpts,
	AddTaskLinkResponse,
	DeleteDependencyOpts,
	DeleteTaskLinkOpts,
	DeleteTaskLinkResponse,
} from "./interfaces";

export class Dependencies extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async addDependency(opts: AddDependencyOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		this.post<AddDependencyOf | AddDependsOn, AddDependencyResponse>(
			opts.data,
			`/task/${opts.taskId}/dependency`,
			query
		);
	}

	public async deleteDependency(opts: DeleteDependencyOpts) {
		const query = {
			depends_on: opts.dependsOn,
			dependency_of: opts.dependencyOf,
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		return this.delete<void>(`/task/${opts.taskId}/dependency`, query);
	}

	public async addTaskLink(opts: AddTaskLinkOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		return this.post<AddTaskLink, AddTaskLinkResponse>(
			{},
			`/task/${opts.taskId}/link/${opts.linksTo}`,
			query
		);
	}

	public async deleteTaskLink(opts: DeleteTaskLinkOpts) {
		const query = {
			custom_task_ids: opts.customTaskIds ? "true" : undefined,
			team_id: opts.teamId,
		};
		return this.delete<DeleteTaskLinkResponse>(
			`/task/${opts.taskId}/link/${opts.linksTo}`,
			query
		);
	}
}
