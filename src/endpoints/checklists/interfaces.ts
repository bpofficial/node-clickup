export interface ChecklistItem {
	id: string;
	name: string;
	orderindex: number;
	assignee: {
		id: number;
		username: string;
		email: string;
		color: string;
		initials: string;
		profilePicture: string;
	};
	resolved: boolean;
	parent: null;
	date_created: string;
	children: unknown[];
}

export interface CreateChecklist {
	name: string;
}

export interface CreateChecklistOpts {
	taskId: string;
	data: CreateChecklist;
}

export interface CreateChecklistResponse {
	checklist: {
		id: string;
		task_id: string;
		name: string;
		orderindex: number;
		resolved: number;
		unresolved: number;
		items: ChecklistItem[];
	};
}

export interface UpdateChecklist {
	name?: string;
	position?: number;
}

export interface UpdateChecklistOpts {
	checklistId: string;
	data: UpdateChecklist;
}

export type UpdateChecklistResponse = CreateChecklistResponse;

export interface CreateChecklistItem {
	name: string;
	assignee: number;
}

export interface CreateChecklistItemOpts {
	checklistId: string;
	data: CreateChecklistItem;
}

export type CreateChecklistItemResponse = CreateChecklistResponse;

export interface UpdateChecklistItem {
	name?: string;
	assignee?: number;
	resolved?: boolean;
	parent?: unknown;
}

export interface UpdateChecklistItemOpts {
	checklistId: string;
	checklistItemId: string;
	data: UpdateChecklistItem;
}

export type UpdateChecklistItemResponse = CreateChecklistResponse;
