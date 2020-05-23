import React from "react";
import Box from "@material-ui/core/Box";
import {Container} from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const FooterStyled = styled.div`
	display: flex;
	width: 99vw;
	padding: 56px;
	background-color: #212121;
	box-sizing: border-box;
`;

const FlexColumn = styled.div`
	display:flex;
	flex-direction: row;
`;
const Link = styled.a`
	color: #e0e0e0;
	text-decoration: underline;
`;
export default function Footer() {
	return(
		<FooterStyled>
			<Container maxWidth={"960px"} mx={"auto"}>
					<FlexColumn>
						<Typography variant="paragraph" align={"left"} >
							<Box m={3} fontSize={"1.2rem"} fontWeight={400} >
								<Link target={"_blank"} rel="noopener noreferrer"
								   href={"https://medium.com/@scyrus89/a-non-technical-introduction-to-cybersecurity-f4d42b9a1ff2"}>Source(medium)</Link>
							</Box>
							<Box m={3} fontSize={"1.2rem"} fontWeight={400} color={"#e0e0e0"}>
								Written by:  <Link target={"_blank"} rel="noopener noreferrer"
								   href={"https://medium.com/@scyrus89"}>Sauvik Das</Link>
							</Box>
						</Typography>
					</FlexColumn>
					
			</Container>
		</FooterStyled>
	);
}