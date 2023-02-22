import { Delete, Instagram } from "@mui/icons-material";
import {
	Alert,
	IconButton,
	Rating,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";

const ExploreBasicComponent = () => {
	const [rating, set_rating] = useState(2);
	return (
		<div>
			<Typography
				variant="h4"
				component="h2"
			>
				This is basic component
			</Typography>

			<Instagram color="primary" />
			<br />
			<IconButton>
				<Delete />
			</IconButton>
			<br />
			<Rating
				name="simple-controlled"
				value={rating}
				onChange={(event, newValue) => {
					set_rating(newValue);
				}}
				sx={{
					color: "steelblue",
				}}
			></Rating>
			<br />

			<Alert severity="error">This is an error alert — check it out!</Alert>
			<br />

			<TextField
				label="User Name"
				helperText="Invalid Name"
				error={true}
			/>
		</div>
	);
};

export default ExploreBasicComponent;
