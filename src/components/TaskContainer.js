import React from 'react';

const styles = {
	container : {
		width: '98%',
		height: 'auto',
		minHeight: '200px',
		border: '1px solid black',
		margin: '0 auto 0 auto',
	},
	header : {
		color: 'blue',
		fontSize: '24px',
		paddingBottom: '10px',
		textAlign: 'center',
		borderBottom: '1px solid black',
	},
	description : {
		width: '100%',
	}
}

let TaskContainer = ({title,description,phase}) => {
	return (
		<div style={styles.container}>
			<h3 style={styles.header}>{title}</h3>
			<section style={styles.description}>
				{description}
			</section>
		</div>
	)
}

export default TaskContainer;
