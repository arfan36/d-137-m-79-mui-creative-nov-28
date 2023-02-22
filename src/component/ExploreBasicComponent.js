import { Button } from "@mui/material";
import React from "react";

const ExploreBasicComponent = () => {
	const isActive = false;
	return (
		<>
			<Button
				variant="contained"
				sx={[
					{
						border: "1px solid red",
						bgcolor: "steelblue",
						p: 2,
						mr: 2,

						// width: {
						// 	xs: 100, // theme.breakpoints.up('xs')
						// 	sm: 200, // theme.breakpoints.up('sm')
						// 	md: 300, // theme.breakpoints.up('md')
						// 	lg: 400, // theme.breakpoints.up('lg')
						// 	xl: 500, // theme.breakpoints.up('xl')
						// },

						// "&.MuiButton-root": {
						// 	padding: "3rem",
						// },

						width: [100, 200, 300, 400, 500],
					},
					isActive && {
						background: "yellow",
					},
				]}
			>
				Submit
			</Button>
			<Button variant="contained">Cancel</Button>
		</>
	);
};

export default ExploreBasicComponent;
