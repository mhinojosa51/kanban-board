import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

const styles = {
	container : {
		width: '100%',
		height: '100px',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	user: {
		width: 80,
		height: 80,
	},
	menu : {
		marginRight: '50px',
	}
}

class Header extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<section style={styles.container}>
				<IconMenu style={styles.menu} iconButtonElement={<IconButton iconStyle={styles.user}><AccountCircle color="#ff6600"/></IconButton>}>

				</IconMenu>
			</section>
		)
	}
}

export default Header;
