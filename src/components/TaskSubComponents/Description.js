import React from 'react';

const styles = {
	container : {
		width: '95%',
		height: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0px auto 0px auto',
	},
	header : {
		padding: '0',
		margin: '0',
	},
	description : {
		width: '80%',
		textAlign: 'left',
		marginLeft: '50px',
	},
	textArea: {
		width: "80%",
		maxWidth: '90%',
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
				<textarea style={styles.textArea} value={description}></textarea>
			</section>
		</section>
	)
}

export default Description;
