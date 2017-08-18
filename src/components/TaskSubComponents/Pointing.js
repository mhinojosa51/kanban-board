import React from 'react';

const styles = {
	container : {
		width: '100%',
		height: '200px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	svg : {
		width: '50px',
		height: '50px',
		border: '1px solid red',
	}
}

let Pointing = ({points}) => {
	return (
		<section style={styles.container}>
			<h2>Points</h2>
			<svg style={styles.svg}>
				<rect x="10" y="10" width="3" height="25" />
			</svg>
		</section>
	)
}

export default Pointing;
