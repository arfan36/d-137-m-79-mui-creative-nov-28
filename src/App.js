import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home/Home/Home";
import { theme } from "./theme/theme";

const router = createBrowserRouter([
	{
		element: <Layout />,
		path: "/",
		children: [
			{
				element: <Home />,
				path: "/",
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<CssBaseline />
		</ThemeProvider>
	);
}

export default App;
