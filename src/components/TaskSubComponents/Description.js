import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
	container : {
		width: '100%',
		height: 'auto',
		display: 'flex',
		border: '1px solid black',
	},
	header : {
		padding: '0',
		margin: '0',
	},
	description : {
		width: '80%',
		textAlign: 'left',
		marginLeft: '5px',
	},
	textArea: {
		width: "98%",
		maxWidth: '98%',
		maxHeight: '200px',
	}
}

let Description = ({description}) => {
	return (
		<section style={styles.container}>
			<section>
				<h4 style={styles.header}>Description</h4>
			</section>
			<section style={styles.description}>
				<textarea style={styles.textArea}>{description}</textarea>
			</section>
		</section>
	)
}

export default Description;
