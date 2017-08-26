import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewTaskDialog from './TaskSubComponents/NewTaskDialog';
import Task from './Task';

class TaskColumn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			addNew : false,
			tasks: React.Children.toArray(this.props.children),
		}

		this.handleTaskDialog = this.handleTaskDialog.bind(this);
		this.handleTaskSave = this.handleTaskSave.bind(this);
		this.addNewTask = this.addNewTask.bind(this);
	}

	handleTaskDialog(){
		var open = !this.state.addNew;

		this.setState({
			addNew : open,
		})
	}

	handleTaskSave(title,description){
		var task = <Task title={title} key={title} description={description} taskWidth={this.props.width}/>;
		this.addNewTask(task);
	}

	addNewTask(task){
		let tasks = this.state.tasks;
		tasks.push(task);

		this.setState({
			tasks,
		})
	}

	render(){
		const styles = {
			container : {
				width: `${this.props.width}px`,
				minWidth: '300px',
				minHeight: '100%',
				height: 'auto',
				border: '1px solid #ff6600',
				display: 'flex',
				flexDirection: 'column',
			},
			header : {
				color: '#ff6600',
				fontSize: '20px',
				textAlign: 'center',
			},
			addTask : {
				marginTop: '10px',
			}
		}

		return (
			<div style={styles.container}>
				<h3 style={styles.header}>{this.props.title}</h3>
				<section style={styles.tasks}>
					<Task title="Words" desscription="Hello" opened={false} taskWidth={this.props.width}/>
						<Task title="Words" desscription="Hello" opened={false} taskWidth={this.props.width}/>
					{this.state.tasks}
				</section>
				{this.props.addTask && <section style={styles.addTask}>
					<FloatingActionButton mini={true}>
						<ContentAdd onClick={this.handleTaskDialog}/>
					</FloatingActionButton>
				</section>}
				{this.state.addNew &&
					<NewTaskDialog opened={this.state.addNew}
						handleClose={this.handleTaskDialog}
						handleTaskSave={this.handleTaskSave}/>}
			</div>
		)
	}
}

export default TaskColumn;
