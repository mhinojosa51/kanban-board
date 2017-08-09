import React from 'react';
import Description from './TaskSubComponents/Description';
import IconButton from 'material-ui/IconButton';

const styles = {
	container : {
		width: '98%',
		height: 'auto',
		minHeight: '30px',
		border: '1px solid black',
		margin: '0 auto 0 auto',
	},
	header : {
		color: 'blue',
		fontSize: '24px',
		textAlign: 'center',
	},
	description : {
		width: '100%',
	}
}

let TaskContainer = ({title,description,phase,opened}) => {
	return (
		<div style={styles.container}>
			<h3 style={styles.header}>{title}</h3>
			{opened && <Description description={description} />}
		</div>
	)
}

export default TaskContainer;
