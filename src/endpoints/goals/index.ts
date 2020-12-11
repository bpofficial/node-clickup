import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import {
	CreateGoal,
	CreateGoalOpts,
	CreateGoalResponse,
	CreateKeyResult,
	CreateKeyResultOpts,
	CreateKeyResultResponse,
	DeleteGoalOpts,
	DeleteKeyResultOpts,
	GetGoalOpts,
	GetGoalResponse,
	GetGoalsOpts,
	GetGoalsResponse,
	UpdateGoal,
	UpdateGoalOpts,
	UpdateGoalResponse,
	UpdateKeyResult,
	UpdateKeyResultOpts,
	UpdateKeyResultResponse,
} from "./interfaces";

export class Goals extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createGoal(opts: CreateGoalOpts) {
		return this.post<CreateGoal, CreateGoalResponse>(
			opts.data,
			`/team/${opts.teamId}/goal`
		);
	}

	public async updateGoal(opts: UpdateGoalOpts) {
		return this.put<UpdateGoal, UpdateGoalResponse>(
			opts.data,
			`/goal/${opts.goalId}`
		);
	}

	public async deleteGoal(opts: DeleteGoalOpts) {
		return this.delete<void>(`/goal/${opts.goalId}`);
	}

	public async getGoals(opts: GetGoalsOpts) {
		return this.get<GetGoalsResponse>(`/team/${opts.teamId}/goal`);
	}

	public async getGoal(opts: GetGoalOpts) {
		return this.get<GetGoalResponse>(`/goal/${opts.goalId}`);
	}

	public async createKeyResult(opts: CreateKeyResultOpts) {
		return this.post<CreateKeyResult, CreateKeyResultResponse>(
			opts.data,
			`/goal/${opts.goalId}/key_result`
		);
	}

	public async editKeyResult(opts: UpdateKeyResultOpts) {
		return this.put<UpdateKeyResult, UpdateKeyResultResponse>(
			opts.data,
			`/key_result/${opts.keyResultId}`
		);
	}

	public async deleteKeyResult(opts: DeleteKeyResultOpts) {
		return this.delete<void>(`/key_result/${opts.keyResultId}`);
	}
}

export * from "./interfaces";
