import React, { useState, useEffect } from "react";
import Modal from "./modal/Modal";
import { Results } from "../types/index";
import "../assets//App.css";

const App: React.FC = () => {
	const [word, updateWord] = useState("");
	const [results, updateResults] = useState<Results[]>([]);
	const [isPalindrome, updatePalindrome] = useState(false);
	const [modalOpen, updateModalState] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value }: { value: string } = e.target;
		updateWord(value);
	};

	const checkPalindrome = () => {
		const newResults: Results[] = [];
		let newIsPalindrome = true;

		const wordToCheck = word.replace(/[^A-Z0-9]/gi, "");
		let beg = 0;
		let end = wordToCheck.length - 1;


		while (beg <= end) {
			const firstLetter = wordToCheck[beg];
			const secondLetter = wordToCheck[end];
			if (firstLetter === secondLetter || beg === end) {
				newResults[beg] = { letter: firstLetter, passed: true };
				newResults[end] = { letter: secondLetter, passed: true };
			} else {
				newResults[beg] = { letter: firstLetter, passed: false };
				newResults[end] = { letter: secondLetter, passed: false };
				newIsPalindrome = false;
			}
			beg++;
			end--;
		}

		updateResults(newResults);
		updatePalindrome(newIsPalindrome);
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		checkPalindrome();

		updateModalState(!modalOpen);
	};

	const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		updateModalState(false);
	};

	return (
		<div className="app">
			<h1>Palindrome Checker</h1>
			<input
				id="palindrome-input"
				type="text"
				placeholder="...type your palindrome here"
				onChange={handleInputChange}
			/>
			<button id="submit-button" onClick={handleSubmit}>
				Submit
			</button>
			{modalOpen && (
				<Modal
					closeModal={closeModal}
					isPalindrome={isPalindrome}
					word={word}
					results={results}
				/>
			)}
		</div>
	);
};

export default App;
