declare type FieldTypes = "url" | "drop_down" | "email" | "phone" | "date" | "text" | "checkbox" | "number" | "currency" | "tasks" | "users" | "emoji" | "labels" | "automatic_progress" | "manual_progress" | "short_text";
export interface UrlTypeConfig {
}
export interface DropDownTypeConfig {
    default: number;
    placeholder: string | null;
    options: {
        id: string;
        value: string | number;
        name: string;
        color: string | null;
        type?: string;
        orderindex?: number;
    }[];
}
export interface EmailTypeConfig {
}
export interface PhoneTypeConfig {
}
export interface DateTypeConfig {
}
export interface TextTypeConfig {
}
export interface CheckboxTypeConfig {
}
export interface NumberTypeConfig {
}
export interface CurrencyTypeConfig {
    precision: number;
    currency_type: string;
    default: number | null;
}
export interface TasksTypeConfig {
}
export interface UsersTypeConfig {
}
export interface EmojiTypeConfig {
    code_point: string;
    count: number;
}
export interface LabelsTypeConfig {
    options: {
        id: string;
        label: string;
        color: string | null;
    }[];
}
export interface AutomaticProgressTypeConfig {
    method?: string;
    complete_on?: number;
    tracking: {
        subtasks: boolean;
        assigned_comments: boolean;
        checklists: boolean;
    };
}
export interface ManualProgressTypeConfig {
    method?: string;
    start: number;
    end: number;
}
export interface ShortTextTypeConfig {
}
export interface CustomField {
    id: string;
    name: string;
    type: FieldTypes;
    type_config: UrlTypeConfig | DropDownTypeConfig | EmailTypeConfig | PhoneTypeConfig | DateTypeConfig | TextTypeConfig | CheckboxTypeConfig | NumberTypeConfig | CurrencyTypeConfig | TasksTypeConfig | UsersTypeConfig | EmojiTypeConfig | LabelsTypeConfig | AutomaticProgressTypeConfig | ManualProgressTypeConfig | ShortTextTypeConfig;
    date_created: string;
    hide_from_guests: boolean;
}
export interface SetCustomFieldValue {
    value: string | number | boolean | string[] | {
        add?: string[];
        rem?: string[];
    } | {
        current: number;
    };
}
export interface SetCustomFieldValueOpts {
    taskId: string;
    fieldId: string;
    customTaskIds?: boolean;
    teamId?: number;
    data: SetCustomFieldValue;
}
export interface RemoveCustomFieldValueOpts {
    taskId: string;
    fieldId: string;
    customTaskIds?: boolean;
    teamId?: number;
}
export {};
