import Part from "./Part";

const Content = () => {
	const part1 = "Fundamentals of React";
	const part2 = "Using props to pass data";
	const part3 = "State of a component";
	const exercises1 = 10;
	const exercises2 = 7;
	const exercises3 = 14;
	return (
		<>
			<Part part={part1} exercise={exercises1}/>
			<Part part={part2} exercise={exercises2}/>
			<Part part={part3} exercise={exercises3}/>
		</>
	);
};

export default Content;
