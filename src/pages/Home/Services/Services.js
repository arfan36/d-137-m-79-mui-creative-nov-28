import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Service from "../../../component/Service/Service";

const serviceImage = [
	"https://i.ibb.co/HNhykGp/iphone-1.png",
	"https://i.ibb.co/r0gHkvM/color-palette-1.png",
	"https://i.ibb.co/CvQwzKC/coding-1.png",
];

const Services = () => {
	return (
		<Box>
			<SectionTitle
				title={"Provide awesome"}
				colored={"Services"}
			/>
			<Grid
				container
				spacing={2}
			>
				{serviceImage.map((image, i) => (
					<Grid
						item
						key={i}
						xs={12}
						sm={6}
						md={4}
					>
						<Service image={image} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
