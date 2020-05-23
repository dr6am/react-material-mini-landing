import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';


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
	return (
		<React.Fragment>
			<CssBaseline/>
			<ElevationScroll {...props}>
				<AppBar>
						<Typography variant="h5" align={"center"}>
							<Box m="1.4rem" fontWeight={500}>"Scammers Are Out of Control Right Now"</Box></Typography>
					
					
				</AppBar>
			</ElevationScroll>
			
			<Toolbar id="back-to-top-anchor" />
		
		</React.Fragment>
	);
}
