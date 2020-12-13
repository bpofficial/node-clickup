export interface CreateTaskAttachment {
    body: unknown;
    filename: string;
}
export interface CreateTaskAttachmentResponse {
    id: string;
    version: string;
    date: number;
    title: string;
    extension: string;
    thumbnail_small: string;
    thumbnail_large: string;
    url: string;
}
