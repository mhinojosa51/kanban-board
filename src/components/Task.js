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
	}

	render(){
		return (
			<TaskContainer title={this.state.title} description={this.state.description} opened={true}/>
		)
	}
}

export default Task;
