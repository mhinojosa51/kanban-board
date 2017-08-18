import React from 'react';
import TaskColumn from './TaskColumn';

const styles = {
	container : {
		display: 'flex',
		width: '100%',
		minHeight: '100%',
		height: '100%',
	}
}

class DashBoard extends React.Component {

	render(){

		const columnWidth = Math.floor(window.innerWidth / this.props.columns.length);
		const taskWidth = Math.round(columnWidth / 2);
		const columns = this.props.columns.map((column,i) => {
			return <TaskColumn title={column}
				width={columnWidth} key={i}
				addTask={column === 'ToDo' ? true : false}
				taskWidth={taskWidth}>
			</TaskColumn>
		})
		return (
			<div style={styles.container}>
				{columns}
			</div>
		)
	}
}

DashBoard.defaultProps = {
	columns : ['ToDo', 'Working', 'Finished'],
}

export default DashBoard;
