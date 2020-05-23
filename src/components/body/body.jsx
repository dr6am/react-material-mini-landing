import React from "react";
import { Card } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {makeStyles} from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import hero from '../../assets/hero.jpg';
import Section from "../body-section/section";
import Typography from "@material-ui/core/Typography";


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
	
	var classes = makeStyles((theme) => ({
		root: {
			display: 'flex',
			flexDirection:"row",
		},
		heroImage:{
			height:"auto",
			width:"100%",
			margin:0,
			padding:0,
			filter: "brightness(60%)",
			transition:"all ease-in-out .2s",
			overflow:"hidden",
			"&:hover":{
				filter: "brightness(100%)",
			}
		}
		
	}))();
 return(
	 <React.Fragment>
	    <Section row>
			<img className={classes.heroImage} src={hero} alt={"Scammers Are Out of Control Right Now"}/>
		    <Box my={"auto"} mx={2}>
			    <Typography variant="h2" align={"left"}>
				    <Box m={5} fontSize={"2rem"} fontWeight={900}>
					    Scammers Are Out of Control Right Now
				    </Box>
			    </Typography>
			    <Typography variant="p" align={"left"}>
				    <Box m={5} fontSize={"1rem"} fontWeight={400}>
					    As host of ‘The Dream’ podcast, reporting on scammers is my job. The pandemic is making fraud way too easy
				    </Box>
			    </Typography>
			    
		    </Box>
	   </Section>
		<Section>
		    <Box fontSize={"1.5em"}  m={5}>
			    <span>I</span> didn’t mean to become the scam police. What happened was this: I made a podcast called The Dream about a very particular kind of scam called multilevel marketing, or network marketing, or direct sales. You know, Mary Kay and Herbalife and Beachbody, the kind of gigs where you purport to sell things to your friends and family, but really your goal is to get them to sign up to sell things for you. And then they are supposed to do the same thing with the not really selling anything but recruiting others to, ad infinitum. They’re pyramid schemes, basically, but don’t quote me on that, because I could get sued.
			
			    
		    </Box>
			 <Box fontSize={"1.5em"} mb={5} mx={5}>
				 We made this podcast a couple years ago, and then last year we made another season about an industry that is frequently linked to multilevel marketing: wellness. Little did we know at the time how prescient our focus was. Now that the world is besieged with Covid-19, the peddlers of scams are out in full force, and the lack of any oversight — any single authority who could do something to shut them down — is most evident in my DMs. Yes, because the Federal Trade Commission (FTC) and the Food and Drug Administration (FDA) and the actual police and lawyers don’t have the resources to go after the immense number of profiteers out there, people are bringing their complaints to me, a mom in Los Angeles who dropped out of high school and now makes podcasts for herself and others. I’m the scam police, and I’d like to give you a snapshot of the reports I’m seeing.
			 </Box>
		 </Section>
	    <ScrollTop {...props}>
		    <Fab color="secondary" size="medium" aria-label="scroll back to top" variant="extended">
			    <KeyboardArrowUpIcon />
			    to top
		    </Fab>
	    </ScrollTop>
    </React.Fragment>
 )
}