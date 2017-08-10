import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewTaskDialog from './TaskSubComponents/NewTaskDialog';

class TaskColumn extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			addNew : false,
		}

		this.handleTaskDialog = this.handleTaskDialog.bind(this);
	}

	handleTaskDialog(){
		var open = !this.state.addNew;

		this.setState({
			addNew : open,
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
				{this.props.children}
				<section style={styles.addTask}>
					<FloatingActionButton mini={true}>
						<ContentAdd onClick={this.handleTaskDialog}/>
					</FloatingActionButton>
				</section>
				{this.state.addNew && <NewTaskDialog opened={this.state.addNew} handleClose={this.handleTaskDialog}/>}
			</div>
		)
	}
}

export default TaskColumn;
