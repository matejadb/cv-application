export default function SubmitCv({ isSubmitted, setIsSubmitted }) {
	const handleFormSubmit = () => {
		setIsSubmitted((is) => !is);
	};

	return (
		<div className="buttons">
			<button className="submit-cv" onClick={handleFormSubmit}>
				{isSubmitted ? 'Edit' : 'Submit'}
			</button>
		</div>
	);
}
