import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { CustomField, RemoveCustomFieldValueOpts, SetCustomFieldValueOpts } from "./interfaces";
export declare class CustomFields extends Endpoint {
    constructor(request: Request);
    getAccessibleCustomFields(listId: string): Promise<CustomField[]>;
    setCustomFieldValue(opts: SetCustomFieldValueOpts): Promise<void>;
    removeCustomFieldValue(opts: RemoveCustomFieldValueOpts): Promise<void>;
}
export * from "./interfaces";
