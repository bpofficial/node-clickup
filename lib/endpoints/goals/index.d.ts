import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CreateGoalOpts, CreateGoalResponse, CreateKeyResultOpts, CreateKeyResultResponse, DeleteGoalOpts, DeleteKeyResultOpts, GetGoalOpts, GetGoalsOpts, GetGoalsResponse, UpdateGoalOpts, UpdateKeyResultOpts, UpdateKeyResultResponse } from "./interfaces";
export declare class Goals extends Endpoint {
    constructor(request: Request);
    createGoal(opts: CreateGoalOpts): Promise<CreateGoalResponse>;
    updateGoal(opts: UpdateGoalOpts): Promise<CreateGoalResponse>;
    deleteGoal(opts: DeleteGoalOpts): Promise<void>;
    getGoals(opts: GetGoalsOpts): Promise<GetGoalsResponse>;
    getGoal(opts: GetGoalOpts): Promise<CreateGoalResponse>;
    createKeyResult(opts: CreateKeyResultOpts): Promise<CreateKeyResultResponse>;
    editKeyResult(opts: UpdateKeyResultOpts): Promise<UpdateKeyResultResponse>;
    deleteKeyResult(opts: DeleteKeyResultOpts): Promise<void>;
}
export * from "./interfaces";
