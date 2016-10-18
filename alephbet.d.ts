declare namespace A {

	interface ExperimentOptions {
		name: string;
		trigger?: Function;
		variants?: any;
		trackingadapter?: TrackingAdapter;
	}

	interface GoalOptions {
		unique: Boolean;
	}

	interface TrackingAdapter {
		experiment_start: Function;
		goal_complete: Function;
	}

	export class Experiment {
		constructor(options: ExperimentOptions)
		name: string;
		add_goal(goal: Goal);
	}

	export class Goal {
		constructor(name: string, options?: GoalOptions);
		add_experiment(experiment: Experiment);
		complete();
	}

}

declare module 'alephbet' {
	export = A;
}

