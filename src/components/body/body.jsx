import React from "react";
import { Card } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {makeStyles} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	
}));

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});
	
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
		
		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};
	
	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	
};
export default function body(props) {
 return(
	 <React.Fragment>
	    <Box mt={10} maxWidth={960} mx={"auto"}>
		    <Card elevation={4.0}>
		    <Box m={5}>
			    
			    {[...new Array(48)]
				    .map(
					    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
				    )
				    .join('\n\n')}
			    
		    </Box>
		    </Card>
	    </Box>
	    <ScrollTop {...props}>
		    <Fab color="secondary" size="medium" aria-label="scroll back to top" variant="extended">
			    <KeyboardArrowUpIcon />
			    to top
		    </Fab>
	    </ScrollTop>
    </React.Fragment>
 )
}