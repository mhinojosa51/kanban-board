import React from 'react';
import TaskContainer from './TaskContainer';

class Task extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title : this.props.title,
			description: this.props.description,
			opened: false,
			stage: this.props.stage || '',
		}

		this.openTask = this.openTask.bind(this);

	}

	openTask(){
		this.setState({
			opened : !this.state.opened,
		})
	}

	render(){
		return (
			<TaskContainer title={this.state.title}
				description={this.state.description}
				opened={this.state.opened}
				handleTaskOpen={this.openTask}
				taskWidth={this.props.taskWidth}
				/>
		)
	}
}

Task.defaultProps = {
	stage : 'todo',
}

export default Task;
