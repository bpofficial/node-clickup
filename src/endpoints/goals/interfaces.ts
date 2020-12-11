import { User } from "../../interfaces/user";

export interface CreateGoal {
	name: string;
	due_date: number;
	description: string;
	multiple_owners: boolean;
	owners?: number[];
	owner?: number;
	color?: string;
}

export interface CreateGoalOpts {
	teamId: number;
	data: CreateGoal;
}

export interface CreateGoalResponse {
	goal: {
		id: string;
		name: string;
		team_id: string;
		date_created: string;
		start_date: null;
		due_date: string;
		description: string;
		private: false;
		archived: false;
		creator: number;
		color: string;
		pretty_id: string;
		multiple_owners: true;
		folder_id: null;
		members: any[];
		owners: User[];
		key_results: any[];
		percent_completed: number;
		history: any[];
		pretty_url: string;
	};
}

export type UpdateGoal = Partial<CreateGoal>;

export interface UpdateGoalOpts {
	goalId: string;
	data: UpdateGoal;
}

export type UpdateGoalResponse = CreateGoalResponse;

export interface DeleteGoalOpts {
	goalId: string;
}

export interface CreateKeyResult {
	name: string;
	owners: number[];
	type: "number" | "currency" | "boolean" | "percentage" | "automatic";
	steps_start: number;
	steps_end: number;
	unit: string;
	task_ids: string[];
	list_ids: string[];
}

export interface CreateKeyResultOpts {
	goalId: string;
	data: CreateKeyResult;
}

export interface CreateKeyResultResponse {}

export type UpdateKeyResult = any;

export interface UpdateKeyResultOpts {
	keyResultId: string;
	data: UpdateKeyResult;
}

export interface UpdateKeyResultResponse {
	id: string;
	goal_id: string;
	name: string;
	type: string;
	unit: string;
	creator: number;
	date_created: string;
	goal_pretty_id: string;
	percent_completed: any;
	completed: boolean;
	task_ids: string[];
	subcategory_ids: string[];
	owners: User[];
	last_action: {
		id: string;
		key_result_id: string;
		userid: number;
		date_modified: string;
		steps_taken: null;
		note: string;
		steps_before: string | null;
		steps_current: string | null;
		steps_before_float: number;
		steps_taken_float: number;
		steps_current_float: string | null;
	};
}

export interface DeleteKeyResultOpts {
	keyResultId: string;
}

export interface GetGoalsOpts {
	teamId: number;
}

export interface GetGoalsResponse {
	goals: CreateGoalResponse["goal"][];
}

export interface GetGoalOpts {
	goalId: string;
}

export type GetGoalResponse = CreateGoalResponse;
