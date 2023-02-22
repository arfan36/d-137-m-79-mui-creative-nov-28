import { useEffect, useState } from "react";
// import Button from '@mui/material/Button';
import "./App.css";
import ExploreBasicComponent from "./component/ExploreBasicComponent";

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
			<div>
				<ExploreBasicComponent />
			</div>
		</div>
	);
}

export default App;
