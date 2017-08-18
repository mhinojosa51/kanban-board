import React from 'react';
import Description from './TaskSubComponents/Description';
import Pointing from './TaskSubComponents/Pointing';

const styles = {
	container : {
		width: '98%',
		height: 'auto',
		minHeight: '30px',
		border: '1px solid black',
		margin: '10px auto 0 auto',
		paddingBottom: '10px',
		cursor: 'pointer',
		outline: 'none',
	},
	header : {
		color: 'blue',
		fontSize: '24px',
		textAlign: 'center',
		outline: 'none',
		userSelect: 'none',
		width: '100%',
	},
	description : {
		width: '100%',
	}
}

let TaskContainer = ({title,description,phase,opened, handleTaskOpen, taskWidth}) => {

	const container = {
		...styles.container,
		width: taskWidth - 5,
	}
	return (
		<div style={container} >
			<section style={styles.header} onClick={handleTaskOpen}>
				<h3>{title}</h3>
			</section>
			{opened &&
				<section>
					<Description description={description} />
					<Pointing />
				</section>
			}
		</div>
	)
}

export default TaskContainer;
