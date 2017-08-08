import React from 'react';
import TaskColumn from './TaskColumn';
import TaskContainer from './TaskContainer';

const styles = {
	container : {
		display: 'flex',
		width: '100%',
		minHeight: '100%',
		height: '100%',
	}
}

class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.columnWidth = 0;
	}

	componentDidMount(){
	}

	render(){
		const columnWidth = Math.floor(window.innerWidth / this.props.columns.length);
		const columns = this.props.columns.map((column,i) => {
			return <TaskColumn title={column} width={columnWidth} key={i}>
				<TaskContainer title="Super Awesome New Feature" description="New feature that everyone will love" />
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
	columns : ['ToDo', 'Start', 'Finishing', 'Finished'],
}

export default DashBoard;
