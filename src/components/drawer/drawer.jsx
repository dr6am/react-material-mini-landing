import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {useTheme} from "@material-ui/core/styles";

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
			<ListItem button to={to} {...other}>
				<ListItemText primary={primary} onClick={() => _scroll(to)}/>
			</ListItem>
	);
}
export default function (props){
	const {open,closeFunc,classes} = props;
	
	const theme = useTheme();
	
	return <Drawer
		className={classes.drawer}
		variant="persistent"
		anchor="left"
		open={open}
		classes={{
			paper: classes.drawerPaper,
		}}
	>
		<div className={classes.drawerHeader}>
			<IconButton onClick={closeFunc}>
				{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
			</IconButton>
		</div>
		<Divider />
		<List>
			{Object.keys(paragraphMap).map((text, index) => (
				<ListItemLink to={text}/>
			))}
		</List>
		<Divider />
	</Drawer>
	
}