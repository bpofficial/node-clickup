import { Endpoint } from "../../common/endpoint.class";
import { Request } from "../../common/request.class";
import { GetSpacesResponse } from "./interfaces";

export class Spaces extends Endpoint {
	constructor(request: Request) {
		super("", request);
	}

	public async createSpace() {}
	public async updateSpace() {}
	public async deleteSpace() {}

	public async getSpaces(teamId: number, archived = false) {
		return this.get<GetSpacesResponse>(`/team/${teamId}/space`, {
			archived: archived ? "true" : "false",
		});
	}

	public async getSpace() {}
}
