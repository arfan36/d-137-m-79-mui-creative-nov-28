import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const HeroCard = () => {
	return (
		<Card sx={{ maxWidth: 345, p: 2 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="190"
				image="https://cdn.vox-cdn.com/thumbor/qtMxzIilE5wtAXS6kINM3T73Hsg=/0x36:1200x711/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50204527/messi.0.0.jpg"
				sx={{
					borderRadius: 1,
				}}
			/>
			<CardContent
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					py: 3,
				}}
			>
				<Box>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
					>
						Lizard
					</Typography>
					<Typography
						variant="body2"
						color="primary.main"
					>
						Lizards are a widespread group of
					</Typography>
				</Box>
				<IconButton
					sx={{
						border: "1px solid #dddddd",
					}}
				>
					<AddIcon />
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default HeroCard;
