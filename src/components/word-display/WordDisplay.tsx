import React from "react";
import "../../assets//word-display.css";
import { WordDisplayProps } from "../../types";

const WordDisplay: React.FC<WordDisplayProps> = props => {
	const { results } = props;

	return (
		<div className="word-display">
			{results.map(result => (
				<span className={result.passed ? "green-letter" : "red-letter"}>
					{result.letter}{" "}
				</span>
			))}
		</div>
	);
};

export default WordDisplay;
