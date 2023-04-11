import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const serviceImage = [
	"https://i.bb.co/HNhykGp/iphone-1.png",
	"https://i.bb.co/r0gHkvM/color-palette-1.png",
	"https://i.bb.co/Cv!wzKC/coding-1.png",
];

const Services = () => {
	return (
		<Box>
			<SectionTitle
				title={"Provide awesome"}
				colored={"Services"}
			/>
		</Box>
	);
};

export default Services;
