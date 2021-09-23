import * as React from "react";

import { ITask } from "./Task";

class TaskFrom extends React.Component<ITaskFormProps, any> {
	constructor(props: ITaskFormProps) {
		super(props);
		this.state = {
			title: "",
			description: "",
		};
	}

	getCurrentTimestamp(): number {
		const date: Date = new Date();
		return date.getTime();
	}

	handleNewTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newTask: ITask = {
			id: this.getCurrentTimestamp(),
			title: this.state.title,
			description: this.state.description,
			completed: false,
		};
		this.props.addANewTask(newTask);
		this.setState({ title: "", description: "" });
	}

	handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div className="card card-body">
				<form onSubmit={e => this.handleNewTask(e)}>
					<div className="form-group">
						<input
							className="form-control"
							name="title"
							onChange={e => this.handleInputChange(e)}
							type="text"
							placeholder="Task title"
							value={this.state.title}
						/>
					</div>
					<div className="form-group">
						<textarea
							className="form-control"
							name="description"
							onChange={e => this.handleInputChange(e)}
							placeholder="Task description"
							value={this.state.description}
						></textarea>
					</div>
					<button className="btn btn-primary btn-block" type="submit">
						Save
					</button>
				</form>
			</div>
		);
	}
}

interface ITaskFormProps {
	addANewTask: (Task: ITask) => void;
}

interface ITaskFromState {
	title: string;
	description: string;
}

export default TaskFrom;
