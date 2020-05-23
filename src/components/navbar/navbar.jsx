import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	
}));
/*grow: {
flexGrow: 1,
},*/
function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});
	
	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	};

export default function NavBar(props) {
	var classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline/>
			<ElevationScroll {...props}>
				<AppBar>
						<Typography variant="h5" align={"center"}>
							<Box m="1.4rem" fontWeight={500}>"Scammers Are Out of Control Right Now"</Box></Typography>
					
					{/*<box m={"auto"}>
						<Button color={"textPrimary"} onClick={()=>alert("penis")}><Typography color={"textPrimary"} variant="h6" align={"center"}>"penis"</Typography></Button>
						<Button color={"textPrimary"} onClick={()=>alert("penis")}><Typography color={"textPrimary"} variant="h6" align={"center"}>"penis"</Typography></Button>
						<Button color={"textPrimary"} onClick={()=>alert("penis")}><Typography color={"textPrimary"} variant="h6" align={"center"}>"penis"</Typography></Button>
					</box>*/}
				</AppBar>
			</ElevationScroll>
			
			<Toolbar id="back-to-top-anchor" />
		
		</React.Fragment>
	);
}
