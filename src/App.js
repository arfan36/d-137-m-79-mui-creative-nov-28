import {
	createTheme,
	CssBaseline,
	Paper,
	Switch,
	ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import HeroCard from "./component/HeroCard";

function App() {
	const [darkMode, set_darkMode] = useState(false);

	const lightTheme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#ff0000",
			},
		},
	});
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "#FFFF00",
			},
		},
	});
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Switch onClick={() => set_darkMode(!darkMode)} />
			<Paper
				sx={{
					height: "100vh",
					width: "100vw",
					display: "grid",
					placeItems: "center",
				}}
			>
				<CssBaseline />
				<HeroCard />
			</Paper>
		</ThemeProvider>
	);
}

export default App;
