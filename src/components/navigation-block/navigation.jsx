import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const _scroll = (element)=>{
	var ele = document.getElementById(element);
	window.scrollTo(ele.offsetLeft, ele.offsetTop);
}
const breadcrumbNameMap = {
	'why-do-we-need-cybersecurity': 'Why do we need cybersecurity?',
	'what-is-cybersecurity': 'What is cybersecurity?',
	'threat-Models': 'Threat Models',
	'authentication': 'Authentication',
	'access-control': 'Access Control',
	'system-and-application_security': 'System and application security',
	'conclusion': 'Conclusion',
};
function ListItemLink(props) {
	const { to, open, ...other } = props;
	const primary = breadcrumbNameMap[to];
	
	return (
		<li>
			<ListItem button component={RouterLink} to={to} {...other}>
				<ListItemText primary={primary} />
				{open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
			</ListItem>
		</li>
	);
}
export default function NavigationBlock(props){
	return(
	
	);
}
