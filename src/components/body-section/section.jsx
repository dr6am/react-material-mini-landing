import Box from "@material-ui/core/Box";
import {Card} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export default function Section(props) {
	var classes = makeStyles((theme) => ({
		columnRoot: {
			display: 'flex',
			flexDirection:"column",
		},
		rowRoot: {
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
	return (<Box mt={6} maxWidth={1024} mx={"auto"}>
		<Card elevation={4.0}
		      className={props.row?classes.rowRoot:classes.columnRoot}>
			{props.children}
		</Card>
	</Box>);
}