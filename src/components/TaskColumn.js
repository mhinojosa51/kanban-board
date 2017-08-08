import React from 'react';

class TaskColumn extends React.Component {
	constructor(props){
		super(props);
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
			}
		}

		return (
			<div style={styles.container}>
				<h3 style={styles.header}>{this.props.title}</h3>
				{this.props.children}
			</div>
		)
	}
}

export default TaskColumn;
