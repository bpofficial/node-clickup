import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CreateChecklistItemOpts, CreateChecklistOpts, CreateChecklistResponse, UpdateChecklistItemOpts, UpdateChecklistOpts } from "./interfaces";
export declare class Checklists extends Endpoint {
    constructor(request: Request);
    createChecklist({ taskId, data }: CreateChecklistOpts): Promise<CreateChecklistResponse>;
    updateChecklist({ checklistId, data }: UpdateChecklistOpts): Promise<CreateChecklistResponse>;
    deleteChecklist(checklistId: string): Promise<void>;
    createChecklistItem({ checklistId, data, }: CreateChecklistItemOpts): Promise<CreateChecklistResponse>;
    updateChecklistItem({ checklistId, checklistItemId, data, }: UpdateChecklistItemOpts): Promise<CreateChecklistResponse>;
    deleteChecklistItem(checklistId: string, checklistItemId: string): Promise<void>;
}
export * from "./interfaces";
