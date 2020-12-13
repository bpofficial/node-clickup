export interface GetSpacesResponse {
	spaces: {
		id: string;
		name: string;
		private: boolean;
		statuses: {
			status: string;
			type: string;
			orderindex: number;
			color: string;
		}[];
		multiple_assignees: boolean;
		features: {
			due_dates: {
				enabled: boolean;
				start_date: boolean;
				remap_due_dates: boolean;
				remap_closed_due_date: boolean;
			};
			time_tracking: {
				enabled: boolean;
			};
			tags: {
				enabled: boolean;
			};
			time_estimates: {
				enabled: boolean;
			};
			checklists: {
				enabled: boolean;
			};
			custom_fields: {
				enabled: boolean;
			};
			remap_dependencies: {
				enabled: boolean;
			};
			dependency_warning: {
				enabled: boolean;
			};
			portfolios: {
				enabled: boolean;
			};
		};
	}[];
}
