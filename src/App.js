import { Avatar, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import Button from '@mui/material/Button';
import "./App.css";

function App() {
	const [submitting, set_submitting] = useState(false);

	useEffect(() => {
		const id = setTimeout(() => {
			set_submitting(false);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, [submitting]);

	return (
		<div className="app">
			<div
				style={{
					background: "#f7f7f7",
					width: "400px",
					height: "400px",
					borderRadius: "1rem",
					padding: "2rem",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<Avatar
						alt="Remy Sharp"
						src="https://cdn.vox-cdn.com/thumbor/qtMxzIilE5wtAXS6kINM3T73Hsg=/0x36:1200x711/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50204527/messi.0.0.jpg"
						sx={{ height: "80px", width: "80px" }}
					/>
					<Typography
						variant="h5"
						component={"h1"}
						gutterBottom
						noWrap
					>
						hello hello hello hello hello hello hello hello
					</Typography>
				</div>
				<Button
					variant="contained"
					disableRipple={false}
					color="secondary"
					fullWidth
					sx={{
						mb: 2,
						mt: 2,
					}}
				>
					Checkout
				</Button>
			</div>
		</div>
	);
}

export default App;
