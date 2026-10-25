import { useEffect, useRef, useState } from "react";
import "./styles/styles.css";

function App() {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [imageSrc, setImageSrc] = useState("");
	const canvasRef = useRef(null);

	useEffect(() => {
		const gl = canvasRef.current.getContext("webgl2");
	}, []);

	useEffect(() => {
		if (selectedFiles.length === 0) return;
		console.log(selectedFiles);
		const fileData = URL.createObjectURL(
			selectedFiles[selectedFiles.length - 1],
		);
		setImageSrc(fileData);
	}, [selectedFiles]);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFiles((prev) => [...prev, file]);
	};

	return (
		<div className="wrapper">
			<form action="#" onSubmit={(event) => handleSubmit(event)}>
				<input
					type="file"
					name="Image Upload"
					id=""
					onChange={(event) => handleFileChange(event)}
				/>
			</form>
			<div className="image">
				{imageSrc === "" ? (
					<div className="no-image">
						Please pick a file to see it.
					</div>
				) : (
					// <img className="img-preview" src={imageSrc} alt="File Preview" />
					<canvas />
				)}
			</div>
		</div>
	);
}

export default App;
