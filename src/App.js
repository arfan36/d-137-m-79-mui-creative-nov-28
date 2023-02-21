import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
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
				<Button
					variant="contained"
					disableRipple={false}
					color="secondary"
					fullWidth
					sx={{ mb: 2 }}
				>
					Checkout
				</Button>

				<LoadingButton
					loading={submitting}
					// loadingIndicator="Loading…"
					variant="outlined"
					onClick={() => set_submitting(true)}
				>
					Fetch data
				</LoadingButton>
			</div>
		</div>
	);
}

export default App;
