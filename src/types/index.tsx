export interface Results {
	letter: string;
	passed: boolean;
}

export interface ModalProps {
	word: string;
	results: Results[];
	closeModal: Function;
	isPalindrome: boolean;
}

export interface WordDisplayProps {
	results: Results[];
}
