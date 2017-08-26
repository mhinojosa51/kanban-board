import React from 'react';

const styles = {
	container : {
		width: '80%',
		height: '50px',
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0px auto 0px auto',
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
			<h4>Points</h4>
			<svg style={styles.svg}>
				<rect x="5" y="31" width="5" height="7" />
				<rect x="13" y="24" width="5" height="14" />
				<rect x="21" y="17" width="5" height="21" />
				<rect x="29" y="10" width="5" height="28" />
				<rect x="37" y="3" width="5" height="35" />
			</svg>
		</section>
	)
}

export default Pointing;
