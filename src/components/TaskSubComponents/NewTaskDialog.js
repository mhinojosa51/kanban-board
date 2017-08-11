import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
	container : {
		width: '100%',
		height: 'auto',
		minHeight: '400px',
		display: 'flex',
		flexDirection: 'column',
	},
	header : {
		fontSize: '20px',
		textAlign: 'center',
		color: '#FF6600',
		fontWeight: 200,
	},
	inputStyle : {
		width: '80%',
	},
	button : {
		margin: '0px 10px 0px 0px',
	}
}

class NewTaskDialog extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			title : '',
			description: '',
		}

		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
		this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleTitleUpdate(e){
		this.setState({
			title : e.target.value,
		}, function(){
			console.log(this.state);
		})
	}

	handleDescriptionUpdate(e){
		this.setState({
			description : e.target.value,
		}, function(){
			console.log(this.state);
		})
	}

	handleSave(){
		let title = this.state.title;
		let description = this.state.description;

		this.props.handleTaskSave(title,description);
		this.props.handleClose();
	}

	render(){

		const actions = [
			<RaisedButton label="Cancel" style={styles.button} onClick={this.props.handleClose} primary={true} />,
			<RaisedButton label="Save" primary={true} onClick={this.handleSave}/>
		];

		return (
			<Dialog open={this.props.opened} onRequestClose={this.props.handleClose} modal={false} actions={actions}>
				<div style={styles.container}>
					<h2 style={styles.header}>Create New Task</h2>
					<TextField floatingLabelText="Title" style={styles.inputStyle} onChange={this.handleTitleUpdate}/>
					<TextField floatingLabelText="Task Description" style={styles.inputStyle} onChange={this.handleDescriptionUpdate} multiLine={true}/>
				</div>
			</Dialog>
		)
	}
}

export default NewTaskDialog;
