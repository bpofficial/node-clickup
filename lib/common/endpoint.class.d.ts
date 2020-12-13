import { Request } from "./request.class";
declare type Query = {
    [i: string]: string | number | undefined;
};
export declare class Endpoint {
    protected readonly path: string;
    private readonly request;
    constructor(path: string, request: Request);
    private joinPaths;
    protected get<R>(path: string, queryOpts?: Query): Promise<R>;
    protected post<T, R>(body: T, path?: string, queryOpts?: Query): Promise<R>;
    protected put<T, R>(body: T, path?: string): Promise<R>;
    protected delete<R>(path: string, queryOpts?: Query): Promise<R>;
}
export {};
