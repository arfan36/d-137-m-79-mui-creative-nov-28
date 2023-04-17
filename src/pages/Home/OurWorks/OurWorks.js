import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const OurWorks = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ mt: 5 }}>
			{/* heading section */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "left",
				}}
			>
				<SectionTitle
					title="Here are some of"
					colored="our works"
					sx={{
						textAlign: "left",
					}}
				/>
				<Box>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
					>
						<Tab label="Item One" />
						<Tab label="Item Two" />
						<Tab label="Item Three" />
					</Tabs>
				</Box>
			</Box>
		</Box>
	);
};

export default OurWorks;
