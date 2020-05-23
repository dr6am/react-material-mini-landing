import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Card} from "@material-ui/core";

const _scroll = (element) => {
	var ele = document.getElementById(element);
	ele.scrollIntoView({
		behavior: 'smooth'
	});
}
const paragraphMap = {
	'home':"Home",
	'why-do-we-need-cybersecurity': 'Why do we need cybersecurity?',
	'what-is-cybersecurity': 'What is cybersecurity?',
	'threat-Models': 'Threat Models',
	'authentication': 'Authentication',
	'access-control': 'Access Control',
	'system-and-application_security': 'System and application security',
	'conclusion': 'Conclusion',
};

function ListItemLink(props) {
	const {to, ...other} = props;
	const primary = paragraphMap[to];
	
	return (
		<li>
			<ListItem button to={to} {...other}>
				<ListItemText primary={primary} onClick={() => _scroll(to)}/>
			</ListItem>
		</li>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: 300,
		position: 'fixed',
		bottom: "40%",
		left: theme.spacing(2),
		zIndex:999,
	},
	lists: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(1),
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));
export default function NavigationBlock(props) {
	const classes = useStyles();
	return (
		
		<div className={classes.root}>
			<Card variant={"outlined"}>
				<nav className={classes.lists} aria-label="mailbox folders">
					<List>
						{
							Object.keys(paragraphMap).map((key) => <ListItemLink to={key}/>)
						}
					</List>
				</nav>
			</Card>
		</div>
	
	);
}
