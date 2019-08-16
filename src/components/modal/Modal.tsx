import React, { useState, useEffect } from "react";
import "../../assets//Modal.css";
import { ModalProps } from "../../types/index";
import WordDisplay from "../word-display/WordDisplay";

const Modal: React.FC<ModalProps> = props => {
	const { results, word, closeModal, isPalindrome } = props;

	return (
		<div className="modal-backdrop">
			<div className="modal">
				<button id="close-modal" onClick={e => closeModal(e)}>
					X
				</button>
				<h2>
					Checker results for "<span>{word}</span>"
				</h2>
				<WordDisplay results={results} />
				<h3>
					{isPalindrome
						? "Neat-o! Its a certified palindrome!"
						: "Wel... it might be a cool word, but it  ain't a true pali"}
				</h3>
			</div>
		</div>
	);	
};

export default Modal;
