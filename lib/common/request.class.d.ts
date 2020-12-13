export declare class Request {
    private readonly path;
    private apiKey?;
    constructor(path: string, apiKey?: string | undefined);
    setApiKey(key: string): void;
    private request;
    get<R>(path: string): Promise<R>;
    post<T, R>(path: string, body: T): Promise<R>;
    put<T, R>(path: string, body: T): Promise<R>;
    delete<R>(path: string): Promise<R>;
}
