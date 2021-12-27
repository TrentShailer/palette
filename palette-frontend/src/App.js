import "./App.css";
import { useState } from "react";
import { Palette } from "./Palette";

function App() {
	return (
		<div className="App">
			<div
				style={{
					marginLeft: "3vw",
					marginRight: "3vw",
					height: "100vh",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "center",
						paddingBottom: 20,
					}}>
					<ColourSet set={Palette.red} name={"Red"} />
					<ColourSet set={Palette.pink} name={"Pink"} />
					<ColourSet set={Palette.purple} name={"Purple"} />
					<ColourSet set={Palette.deepPurple} name={"D. Purple"} />
					<ColourSet set={Palette.indigo} name={"Indigo"} />
					<ColourSet set={Palette.blue} name={"Blue"} />
					<ColourSet set={Palette.lightBlue} name={"L. Blue"} />
					<ColourSet set={Palette.cyan} name={"Cyan"} />
					<ColourSet set={Palette.teal} name={"Teal"} />
					<ColourSet set={Palette.green} name={"Green"} />
					<ColourSet set={Palette.lightGreen} name={"L. Green"} />
					<ColourSet set={Palette.lime} name={"Lime"} />
					<ColourSet set={Palette.yellow} name={"Yellow"} />
					<ColourSet set={Palette.amber} name={"Amber"} />
					<ColourSet set={Palette.orange} name={"Orange"} />
					<ColourSet set={Palette.deepOrange} name={"D. Orange"} />
					<ColourSet set={Palette.brown} name={"Brown"} />
					<ColourSet set={Palette.grey} name={"Grey"} />
					<ColourSet set={Palette.blueGrey} name={"Blue Grey"} />
				</div>
			</div>
		</div>
	);
}

function ColourSet({ set, name }) {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "nowrap",
				flexDirection: "column",
				width: 90,
				paddingTop: 20,
			}}>
			<div
				style={{
					position: "relative",
					fontFamily: "Roboto Mono",
					userSelect: "none",
					textAlign: "center",
				}}>
				{name}
			</div>
			{set.normal.map((colour) => (
				<ColourBox key={colour} colour={colour} />
			))}
			{set.alt.map((colour) => (
				<ColourBox key={colour} colour={colour} />
			))}
		</div>
	);
}

function GetTextColour(colour) {
	var r = parseInt(colour.substr(1, 2), 16);
	var g = parseInt(colour.substr(3, 2), 16);
	var b = parseInt(colour.substr(5, 2), 16);
	r /= 255;
	g /= 255;
	b /= 255;
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	var l = ((max + min) / 2) * 100;
	if (l > 48) return Palette.grey.alt[3];
	else return Palette.grey.alt[0];
}

function ColourBox({ colour }) {
	const [hovered, setHovered] = useState(0);
	const [text, setText] = useState(colour);

	const textColour = GetTextColour(colour);

	const handleEnter = () => {
		setHovered(1);
	};
	const handleExit = () => {
		setHovered(0);
	};
	const handleClick = () => {
		navigator.clipboard.writeText(colour);
		setText("Copied");
		setTimeout(() => {
			setText(colour);
		}, 1000);
	};

	return (
		<div
			style={{ width: 90, height: 60, background: colour, cursor: "pointer" }}
			onMouseEnter={handleEnter}
			onMouseLeave={handleExit}
			onClick={handleClick}>
			<div
				style={{
					color: textColour,
					fontFamily: "Roboto Mono",
					opacity: hovered,
					transition: "opacity 500ms linear",
					userSelect: "none",
					textAlign: "center",
					marginTop: "auto",
					marginBottom: "auto",
				}}>
				{text}
			</div>
		</div>
	);
}

export default App;
